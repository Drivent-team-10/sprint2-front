import { Box, Typography } from '@material-ui/core';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from 'styled-components';

export default function PaymentConfirmation() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
      <CheckCircleIcon style={{ fill: '#36B853', fontSize: '40.33px' }} />
      <div>
        <Typography>
          <strong>Pagamento confirmado!</strong>
        </Typography>
        <StyledTypography>Prossiga para escolha de hospedagem e atividades</StyledTypography>
      </div>
    </Box>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
