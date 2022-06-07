import { useContext } from 'react';
import PaymentContext from '../contexts/PaymentContext';

export default function usePayment() {
  const paymentContext = useContext(PaymentContext);
  return paymentContext;
}
