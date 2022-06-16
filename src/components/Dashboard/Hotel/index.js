import usePaymentData from '../../../hooks/api/usePayment';
import { Box, Container } from '@material-ui/core';
import { StyledTypography } from '../style';
import DeckHotel from './DeckHotel';
import RoomSelection from './RoomSelection';
import { useEffect, useState } from 'react';
import useHotel from '../../../hooks/useHotel';
import ChangeRoomsButton from './ChangeRoomsButton';
import { useSelectedHotelData } from '../../../hooks/api/useHotel';
import CardHotel from './CardHotel';
import HotelSelected from './HotelSelected';

export default function HotelPage() {
  const { payment } = usePaymentData();
  const { hotelInfo } = useHotel();
  const [changeRooms, setChangeRooms] = useState(false);

  

  const hotelData = useSelectedHotelData();
  useEffect(() => {
  }, [hotelData, useSelectedHotelData]);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {
        <Box display="flex" alignItems="center" justifyContent="center" height="100%">
          {!payment?.length ? (
            <StyledTypography variant="h6" color="textSecondary">
              Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
            </StyledTypography>
          ) : !payment[0]?.reservation?.accommodation ? (
            <StyledTypography variant="h6" color="textSecondary">
              Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades
            </StyledTypography>
          ) : (
            <Box
              display="flex"
              marginTop="36px"
              flexDirection="column"
              alignSelf="flex-start"
              justifySelf="center"
              width="100%"
              max-height="100%"
            >
              <StyledTypography variant="h6" color="textSecondary">
                {
                  hotelData ?
                    'Você já escolheu seu quarto:'
                  : 'Primeiro, escolha seu hotel'
                }
              </StyledTypography>
              {
                hotelData ?
                  <>
                    <HotelSelected
                      key={Math.random()}
                      id={hotelData.hotel?.accommodation?.id}
                      name={hotelData.hotel?.accommodation?.name}
                      image={hotelData.hotel?.accommodation?.image}
                      capacityTotal={hotelData.hotel?.accommodation?.capacityTotal}
                      occupation={hotelData.hotel?.accommodation?.occupation}
                      hotelSelected={hotelData.hotel}
                    />
                    {
                      changeRooms ?
                        hotelData && <RoomSelection />
                      : ''
                    }
                  </>
                  : 
                  <>
                    <DeckHotel /> {hotelInfo && <RoomSelection />}
                  </>
                   
                  }
              <div sx={{ width: '95%' }}>
                {changeRooms ? (
                  ''
                ) : (
                  <ChangeRoomsButton setChangeRooms={setChangeRooms} />
                )}
              </div>
            </Box>
          )}
        </Box>
      }
    </>
  );
}
