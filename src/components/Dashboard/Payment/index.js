/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import { Box } from '@material-ui/core';
import useToken from '../../../hooks/useToken';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useEvent from '../../../hooks/api/useEvent';
import { getPaymentInformations } from '../../../services/paymentApi';
import { getReservation } from '../../../services/ticketApi';

import Selection from './Selection';
import PaymentForm from './PaymentForm';

import { StyledTypography } from '../style';
import usePayment from '../../../hooks/usePayment';
import { toast } from 'react-toastify';

export default function PaymentPage() {
  const token = useToken();
  const { event } = useEvent();
  const { enrollment } = useEnrollment();
  const { paymentInfo, setIsPayedFor, setPaymentInfo, setTicketPrice } = usePayment();

  const [isReservationReady, setIsReservationReady] = useState(false);

  useEffect(() => {
    if (!event) return;
    async function verifyIfUserAlreadyPayed() {
      try {
        const [payment] = await getPaymentInformations({ eventId: event.id, token });
        if (!payment) {
          return;
        }
        const reservation = await getReservation(payment.reservationId, token);
        setPaymentInfo({ ...paymentInfo, type: reservation.type, hotel: reservation.accommodation });
        setTicketPrice(`R$ ${reservation.amount / 100}`);
        setIsReservationReady(true);
        setIsPayedFor(true);
      } catch (e) {
        console.log(e);
        toast('Não foi possível carregar as informações do seu pagamento, tente novamente mais tarde');
      }
    }
    verifyIfUserAlreadyPayed();
  }, [event]);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {!enrollment ? (
        <Box display="flex" alignItems="center" justifyContent="center" height="100%">
          <StyledTypography variant="h6" color="textSecondary">
            Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso
          </StyledTypography>
        </Box>
      ) : isReservationReady ? (
        <PaymentForm />
      ) : (
        <Selection setIsReservationReady={setIsReservationReady} />
      )}
    </>
  );
}
