import usePaymentData from '../../../hooks/api/usePayment';
import { Box } from '@material-ui/core';
import { StyledTypography } from '../style';
import Activities from './ActivityRender';

export default function HotelPage() {
  const { payment } = usePaymentData();

  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      {
        <>
          {!payment?.length ? (
            <Box display="flex" alignItems="center" justifyContent="center" height="80%">
              <StyledTypography variant="h6" color="textSecondary">
                Você precisa ter confirmado pagamento antes de fazer a escolha de atividades
              </StyledTypography>
            </Box>
          ) : (
            <Activities />
          )}
        </>
      }
    </>
  );
}
