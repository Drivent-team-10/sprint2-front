import { Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import usePayment from '../../../hooks/usePayment';
import CardForm from './CreditCard';
import PaymentConfirmation from './PaymentConfirmation';

export default function PaymentForm() {
  const { paymentInfo, ticketPrice, isPayedFor } = usePayment();
  const [success, setSuccess] = useState(false);

  function TicketDescription() {
    if (paymentInfo.type === 'online') {
      return 'Online';
    }
    if (paymentInfo.type === 'presential') {
      if (!paymentInfo.hotel) {
        return 'Presencial';
      } else {
        return 'Presencial + Com Hotel';
      }
    }
  }
  return (
    <Box>
      <Box sx={{ margin: '0 0 25px 0' }}>
        <StyledTypography variant="h6" color="textSecondary">
          Ingresso escolhido
        </StyledTypography>
        <StyledSumaryText isSelected={true} disabled>
          <Typography>{TicketDescription()}</Typography>
          <Typography color="textSecondary">{ticketPrice}</Typography>
        </StyledSumaryText>
      </Box>
      <Box>
        <StyledTypography variant="h6" color="textSecondary">
          Pagamento
        </StyledTypography>
        {isPayedFor ? <PaymentConfirmation /> : <CardForm setSuccess={setSuccess} />}
      </Box>
    </Box>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const StyledSumaryText = styled.button`
  all: unset;
  width: 290px;
  height: 108px;
  display: flex;
  flex-direction: column;
  :disabled {
    cursor: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #cecece;
    border-radius: 20px;
    background-color: ${(props) => (props.isSelected ? '#ffeed2' : '#fff')};
  }
`;
