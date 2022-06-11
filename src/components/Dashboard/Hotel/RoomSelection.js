import { Box, Typography } from '@mui/material';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useEffect, useState } from 'react';
import { getAccommodationsRooms, postAccommodationsRoom } from '../../../services/accommodationApi';
import styled from 'styled-components';
import useToken from '../../../hooks/useToken';
import Button from '../../Form/Button';
import { toast } from 'react-toastify';
import usePayment from '../../../hooks/usePayment';
import { getReservation } from '../../../services/ticketApi';
import usePaymentData from '../../../hooks/api/usePayment';
import useHotel from '../../../hooks/useHotel';

export default function RoomSelection() {
  const token = useToken();
  const { payment } = usePaymentData();
  const { reservation, setReservation } = usePayment();
  const { hotelInfo } = useHotel();

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    if (!payment) return;

    try {
      async function loadReservation() {
        const response = await getReservation(payment[0].reservationId, token);
        setReservation(response);
      }
      async function loadRooms() {
        const { id } = hotelInfo;
        const response = await getAccommodationsRooms(id, token);
        setRooms(response);
      }
      loadReservation();
      loadRooms();
    } catch (e) {
      toast(e);
    }
  }, [payment, hotelInfo]);

  async function handleRoomSubmit() {
    try {
      await postAccommodationsRoom(selectedRoom, reservation.id, token);

      // REDIRECIONAR PARA A TELA DE RESUMO
    } catch (e) {
      toast('Não foi possível reservar o quarto no momento. Tente novamente mais tarde!');
    }
  }

  function renderRoomCapacity(room, isSelected) {
    const capacity = [...new Array(room.type.capacity)].map((value, index) => index + 1 > room.occupation);

    if (isSelected) {
      let freeSpace = capacity.findIndex((space) => space);
      capacity[freeSpace] = 'selected';
    }
    return capacity;
  }

  function handleSelection(id) {
    if (id === selectedRoom) {
      return setSelectedRoom(null);
    }
    return setSelectedRoom(id);
  }
  if (!rooms) {
    return 'carregando';
  }

  console.log(rooms);

  return (
    <Box>
      <Typography variant="h6" color="textSecondary">
        Ótima pedida! Agora escolha seu quarto:
      </Typography>
      <Box
        sx={{
          height: '220px',
          width: '100%',
          mt: 4,

          display: 'flex',
          gap: '5px',
          flexDirection: 'column',
          flexWrap: 'wrap',

          overflowX: 'scroll',
        }}
      >
        {rooms.map((room) => {
          const availability = renderRoomCapacity(room, selectedRoom === room.id);
          return (
            <StyledRoomButton
              key={room.id}
              disabled={room.typeId === room.occupation}
              onClick={() => handleSelection(room.id)}
              isSelected={selectedRoom === room.id}
            >
              <Typography>{room.number}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
                {availability.map((isAvailable) => (
                  <Box key={Math.random()} edge="end" aria-label="room-availability">
                    {isAvailable ? (
                      isAvailable === 'selected' ? (
                        <PersonRoundedIcon sx={{ color: '#FF4791' }} />
                      ) : (
                        <PersonOutlineRoundedIcon key={Math.random()} />
                      )
                    ) : (
                      <PersonRoundedIcon />
                    )}
                  </Box>
                ))}
              </Box>
            </StyledRoomButton>
          );
        })}
      </Box>
      {selectedRoom && (
        <Button disabled={!selectedRoom} onClick={handleRoomSubmit}>
          Reservar Quarto
        </Button>
      )}
    </Box>
  );
}

const StyledRoomButton = styled.button`
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 0 16px;

  background-color: #fff;

  background-color: ${(props) => (props.isSelected ? '#FFEED2' : '#fff')};

  &:disabled {
    background-color: #cecece;
  }
`;
