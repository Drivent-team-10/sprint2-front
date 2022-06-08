import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

const styles = {
  list: {
    flexWrap: 'wrap',
  },
  listItem: {
    width: '190px',
  },
};

export default function RoomSelection() {
  return (
    <Box>
      <Typography variant="h6" color="textSecondary">
        Ótima pedida! Agora escolha seu quarto:
      </Typography>
      <List sx={styles.list}>
        {roomsMock.map((room) => {
          return (
            <ListItem
              key={room.id}
              disabled={room.capacity === room.occupation}
              secondaryAction={[...new Array(room.capacity)].map(() => (
                <IconButton key={Math.random()} edge="end" aria-label="room-availability">
                  <PersonOutlineRoundedIcon key={Math.random()} />
                </IconButton>
              ))}
            >
              <ListItemText primary={room.number} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

const roomsMock = [
  { id: 1, number: '101', capacity: 3, occupation: 0 },
  { id: 2, number: '102', capacity: 2, occupation: 1 },
  { id: 3, number: '103', capacity: 2, occupation: 2 },
  { id: 4, number: '104', capacity: 1, occupation: 0 },
  { id: 5, number: '105', capacity: 3, occupation: 1 },
];
