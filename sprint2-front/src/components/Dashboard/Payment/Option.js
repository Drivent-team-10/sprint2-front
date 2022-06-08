import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function OptionButton({ title, body, isSelected, onClick, ...props }) {
  return (
    <StyledButton onClick={onClick} isSelected={isSelected}>
      <StyledBox>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {body}
        </Typography>
      </StyledBox>
    </StyledButton>
  );
}

const StyledBox = styled(Box)`
  height: 145px;
  width: 145px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #cecece;
  border-radius: 20px;
  background-color: ${(props) => (props.isSelected ? '#ffeed2' : '#fff')};
`;
