import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import styled from 'styled-components';
import { useState } from 'react';

const styles = {
  list: {
    flexWrap: 'wrap',
  },
  listItem: {
    width: '190px',
  },
};

export default function RoomSelection() {
  const [ocupiedRoom, setOccupiedRoom] = useState(false);

  function renderRoomCapacity(room) {
    const capacity = [...new Array(room.capacity)].map((value, index) => index + 1 > room.occupation);
    return capacity;
  }
  return (
    <Box>
      <Typography variant="h6" color="textSecondary">
        Ótima pedida! Agora escolha seu quarto:
      </Typography>
      <Box
        sx={{
          height: '220px',
          width: '100%',
          mt: 4,

          display: 'flex',
          gap: '5px',
          flexDirection: 'column',
          flexWrap: 'wrap',

          overflowX: 'scroll',
        }}
      >
        {roomsMock.map((room) => {
          const availability = renderRoomCapacity(room);
          console.log(availability);
          return (
            <StyledRoomButton key={Math.random()} disabled={room.capacity === room.occupation}>
              <Typography>{room.number}</Typography>
              <Box>
                {availability.map((el) => (
                  <IconButton key={Math.random()} edge="end" aria-label="room-availability">
                    {el ? <PersonOutlineRoundedIcon key={Math.random()} /> : <PersonRoundedIcon />}
                  </IconButton>
                ))}
              </Box>
            </StyledRoomButton>
          );
        })}
      </Box>
    </Box>
  );
}

const roomsMock = [
  { id: 1, number: '101', capacity: 3, occupation: 0 },
  { id: 2, number: '102', capacity: 2, occupation: 1 },
  { id: 3, number: '103', capacity: 2, occupation: 2 },
  { id: 4, number: '104', capacity: 1, occupation: 0 },
  { id: 5, number: '105', capacity: 3, occupation: 1 },
  { id: 1, number: '101', capacity: 3, occupation: 0 },
  { id: 2, number: '102', capacity: 2, occupation: 1 },
  { id: 3, number: '103', capacity: 2, occupation: 2 },
  { id: 4, number: '104', capacity: 1, occupation: 0 },
  { id: 5, number: '105', capacity: 3, occupation: 1 },
  { id: 1, number: '101', capacity: 3, occupation: 0 },
  { id: 2, number: '102', capacity: 2, occupation: 1 },
  { id: 3, number: '103', capacity: 2, occupation: 2 },
  { id: 4, number: '104', capacity: 1, occupation: 0 },
  { id: 5, number: '105', capacity: 3, occupation: 1 },
  { id: 1, number: '101', capacity: 3, occupation: 0 },
  { id: 2, number: '102', capacity: 2, occupation: 1 },
  { id: 3, number: '103', capacity: 2, occupation: 2 },
  { id: 4, number: '104', capacity: 1, occupation: 0 },
  { id: 5, number: '105', capacity: 3, occupation: 1 },
  { id: 1, number: '101', capacity: 3, occupation: 0 },
  { id: 2, number: '102', capacity: 2, occupation: 1 },
  { id: 3, number: '103', capacity: 2, occupation: 2 },
  { id: 4, number: '104', capacity: 1, occupation: 0 },
  { id: 5, number: '105', capacity: 3, occupation: 1 },
  { id: 1, number: '101', capacity: 3, occupation: 0 },
  { id: 2, number: '102', capacity: 2, occupation: 1 },
  { id: 3, number: '103', capacity: 2, occupation: 2 },
  { id: 4, number: '104', capacity: 1, occupation: 0 },
  { id: 5, number: '105', capacity: 3, occupation: 1 },
  { id: 1, number: '101', capacity: 3, occupation: 0 },
  { id: 2, number: '102', capacity: 2, occupation: 1 },
];

const StyledRoomButton = styled.button`
  width: 190px;
  border: 1px solid #cecece;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 0 16px;

  background-color: #fff;

  &:disabled {
    background-color: #cecece;
  }
`;
