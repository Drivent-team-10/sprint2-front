import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Button({ variant = 'contained', children, ...props }) {
  return (
    <StyledMuiButton variant={variant} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 8px !important;
  background-color: ${(props) => (props.sx ? props.sx.backgroundColor : '#E0E0E0')} !important;
`;
