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