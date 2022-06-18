import usePaymentData from '../../../hooks/api/usePayment';
import { Box } from '@material-ui/core';
import { StyledTypography } from '../style';
import Activities from './ActivityRender';
import TextWarn from '../../TextWarn';

export default function HotelPage() {
  const { payment } = usePaymentData();
  if (payment) console.log(payment[0].reservation.type);
  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      {
        <>
          {!payment?.length ? (
            <TextWarn>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</TextWarn>
          ) : payment[0].reservation.type === 'online' ? (
            <TextWarn>
              Sua modalidade de ingresso não necessita escolher atividade.
              <br /> Você terá acesso a todas as atividades.
            </TextWarn>
          ) : (
            <Activities />
          )}
        </>
      }
    </>
  );
}
