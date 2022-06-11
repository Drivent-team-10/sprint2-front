import { Box, Typography } from '@mui/material';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import styled from 'styled-components';
import { useState } from 'react';

export default function RoomSelection() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  function renderRoomCapacity(room, isSelected) {
    const capacity = [...new Array(room.capacity)].map((value, index) => index + 1 > room.occupation);

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
        {roomsMock.map((room) => {
          const availability = renderRoomCapacity(room, selectedRoom === room.id);
          return (
            <StyledRoomButton
              key={room.id}
              disabled={room.capacity === room.occupation}
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
    </Box>
  );
}

const roomsMock = [
  { id: 1, number: '101', capacity: 3, occupation: 0 },
  { id: 2, number: '102', capacity: 2, occupation: 1 },
  { id: 3, number: '103', capacity: 2, occupation: 2 },
  { id: 4, number: '104', capacity: 1, occupation: 0 },
  { id: 5, number: '105', capacity: 3, occupation: 1 },
  { id: 11, number: '101', capacity: 3, occupation: 0 },
  { id: 12, number: '102', capacity: 2, occupation: 1 },
  { id: 13, number: '103', capacity: 2, occupation: 2 },
  { id: 14, number: '104', capacity: 1, occupation: 0 },
  { id: 15, number: '105', capacity: 3, occupation: 1 },
  { id: 111, number: '101', capacity: 3, occupation: 0 },
  { id: 211, number: '102', capacity: 2, occupation: 1 },
  { id: 311, number: '103', capacity: 2, occupation: 2 },
  { id: 411, number: '104', capacity: 1, occupation: 0 },
  { id: 511, number: '105', capacity: 3, occupation: 1 },
  { id: 21, number: '101', capacity: 3, occupation: 0 },
  { id: 22, number: '102', capacity: 2, occupation: 1 },
  { id: 23, number: '103', capacity: 2, occupation: 2 },
  { id: 24, number: '104', capacity: 1, occupation: 0 },
  { id: 25, number: '105', capacity: 3, occupation: 1 },
  { id: 31, number: '101', capacity: 3, occupation: 0 },
  { id: 32, number: '102', capacity: 2, occupation: 1 },
  { id: 33, number: '103', capacity: 2, occupation: 2 },
  { id: 34, number: '104', capacity: 1, occupation: 0 },
  { id: 35, number: '105', capacity: 3, occupation: 1 },
  { id: 41, number: '101', capacity: 3, occupation: 0 },
  { id: 42, number: '102', capacity: 2, occupation: 1 },
  { id: 43, number: '103', capacity: 2, occupation: 2 },
  { id: 44, number: '104', capacity: 1, occupation: 0 },
  { id: 45, number: '105', capacity: 3, occupation: 1 },
];

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
