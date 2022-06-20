import { Box } from '@material-ui/core';
import { StyledTypography } from './Dashboard/style';

export default function TextWarn({ children }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="80%">
      <StyledTypography variant="h6" color="textSecondary">
        {children}
      </StyledTypography>
    </Box>
  );
}
