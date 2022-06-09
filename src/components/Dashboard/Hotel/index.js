import usePaymentData from '../../../hooks/api/usePayment';
import { Box } from '@material-ui/core';
import { StyledTypography } from '../style';

export default function HotelPage() {
  const { payment } = usePaymentData();

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {
        !payment ? (
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            <StyledTypography variant="h6" color="textSecondary">
              Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
            </StyledTypography>
          </Box>
        ) : <h3>Hoteis aqui</h3>
      }
    </>
  );
}
