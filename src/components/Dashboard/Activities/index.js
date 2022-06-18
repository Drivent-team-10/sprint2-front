import usePaymentData from '../../../hooks/api/usePayment';
import { Box } from '@material-ui/core';
import { StyledTypography } from '../style';
import Activities from './ActivityRender';

export default function HotelPage() {
  const { payment } = usePaymentData();
  if (payment) console.log(payment[0].reservation.type);
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
          ) : payment[0].reservation.type === 'online' ? (
            <Box display="flex" alignItems="center" justifyContent="center" height="80%">
              <StyledTypography variant="h6" color="textSecondary">
                Sua modalidade de ingresso não necessita escolher atividade.
                <br /> Você terá acesso a todas as atividades.
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
