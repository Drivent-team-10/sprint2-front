import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicket() {
  const {
    loading: loadingTicketReservation,
    error: ticketReservationError,
    act: reserveTicket,
  } = useAsync(ticketApi.reserveTicket, false);

  return {
    loadingTicketReservation,
    ticketReservationError,
    reserveTicket,
  };
}

export function useReservationType() {
  const token = useToken();
  
  const {
    data: payment,
    loading: paymentLoading,
    error: paymentError,
    act: getPayment,
  } = useAsync(() => paymentApi.getPaymentInformations({ eventId: 1, token }));

  return {
    payment,
    paymentLoading,
    paymentError,
    getPayment,
  };
}