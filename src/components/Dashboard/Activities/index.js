import usePaymentData from '../../../hooks/api/usePayment';
import { StyledTypography } from '../style';
import Activities from './ActivityRender';
import TextWarn from '../../TextWarn';

export default function HotelPage() {
  const { payment } = usePaymentData();
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
