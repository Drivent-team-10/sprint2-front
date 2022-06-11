import usePaymentData from '../../../hooks/api/usePayment';
import { Box, Container } from '@material-ui/core';
import { StyledTypography } from '../style';
import DeckHotel from './DeckHotel';
import RoomSelection from './RoomSelection';
import { useState } from 'react';
import useHotel from '../../../hooks/useHotel';

export default function HotelPage() {
  const { payment } = usePaymentData();
  const { hotelInfo } = useHotel();

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {
        <Box display="flex" alignItems="center" justifyContent="center" height="100%">
          {!payment?.length ? (
            <StyledTypography variant="h6" color="textSecondary">
              Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
            </StyledTypography>
          ) : !payment[0]?.Reservation?.accommodation ? (
            <StyledTypography variant="h6" color="textSecondary">
              Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades
            </StyledTypography>
          ) : (
            <Box
              display="flex"
              marginTop="36px"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              width="100%"
              height="100%"
            >
              <StyledTypography variant="h6" color="textSecondary">
                Primeiro, escolha seu hotel
              </StyledTypography>
              <div sx={{ width: '95%' }}>
                <DeckHotel />
                {hotelInfo.name && <RoomSelection />}
              </div>
            </Box>
          )}
        </Box>
      }
    </>
  );
}
