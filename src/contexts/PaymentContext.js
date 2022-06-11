import { createContext, useState } from 'react';

const PaymentContext = createContext();
export default PaymentContext;

export function PaymentProvider({ children }) {
  const [paymentInfo, setPaymentInfo] = useState({
    type: null,
    hotel: null,
    cardData: null,
  });
  const [ticketPrice, setTicketPrice] = useState(null);
  const [isPayedFor, setIsPayedFor] = useState(false);
  const [reservation, setReservation] = useState();

  function handleChange(key, value) {
    const isValid = validateKeyValuePair(key, value);
    if (!isValid) {
      return;
    }

    if (paymentInfo[key] === value) {
      return setPaymentInfo({ ...paymentInfo, [key]: null });
    }

    if (key === 'type' && value === 'online') {
      setTicketPrice('100');
      return setPaymentInfo({ ...paymentInfo, [key]: value, hotel: null });
    }

    if (key === 'hotel' && value === true) {
      setTicketPrice('600');
      return setPaymentInfo({ ...paymentInfo, [key]: value });
    }

    setTicketPrice('250');
    setPaymentInfo({ ...paymentInfo, [key]: value });
  }

  return (
    <PaymentContext.Provider
      value={{
        paymentInfo,
        setPaymentInfo,
        handleChange,
        ticketPrice,
        setTicketPrice,
        isPayedFor,
        setIsPayedFor,
        reservation,
        setReservation,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

function validateKeyValuePair(key, value) {
  if (key === 'type' && value !== 'presential' && value !== 'online') {
    return false;
  } else if (key === 'hotel' && value !== true && value !== false) {
    return false;
  }
  return true;
}
