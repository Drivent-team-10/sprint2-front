import { Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import Button from '../../Form/Button';

const daysMock = ['Sexta, 22/10', 'Sábado, 23/10', 'Domingo, 24/10'];

export default function Activities() {
  const [props, setProps] = useState({});

  function handleSelection(i) {
    if (props[i]) return setProps({});
    const selectionConfig = { backgroundColor: '#FFD37D' };
    setProps({ [i]: selectionConfig });
  }

  return (
    <Box>
      <Typography variant="h4">Escolha de atividades</Typography>
      <Box sx={{ margin: '36px 0 0 0' }}>
        {Object.keys(props).length === 0 && (
          <Typography variant="h6" color="textSecondary">
            Primeiro, filtre pelo dia do evento:
          </Typography>
        )}
        <Box sx={{ display: 'flex', gap: '17px' }}>
          {daysMock.map((day, i) => (
            <Button key={i} sx={props[i]} onClick={(e) => handleSelection(i)}>
              {day}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
