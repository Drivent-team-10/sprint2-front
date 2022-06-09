import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function usePaymentData() {
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
