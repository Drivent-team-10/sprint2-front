import { Button, Typography } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';

const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  background: '#000',
  '&:hover': {
    backgroundColor: purple[900],
  },
  textTransform: 'none',
}));

export function GithubButton() {
  return (
    <ColorButton
      variant="contained"
      sx={{ width: '75%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
      onClick={() => window.location.assign(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`)}
    >
      <GitHubIcon />
      <Typography>Entrar com GitHub</Typography>
    </ColorButton>
  );
}
