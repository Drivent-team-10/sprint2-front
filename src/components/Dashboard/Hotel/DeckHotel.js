import { Box } from '@material-ui/core';
import useHotelData from '../../../hooks/api/useHotel';
import CardHotel from './CardHotel';

export default function DeckHotel({ setSelectedHotel }) {
  const { hotels } = useHotelData();

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      sx={{ gap: 15 }}
      alignSelf="flex-start"
      justifySelf="left"
      width="100%"
      height="100%"
    >
      {hotels?.length
        ? hotels.map((hotel) => (
            <CardHotel
              key={Math.random()}
              accommodation={hotel.accommodation}
              type1={hotel.type1}
              type2={hotel.type2}
              type3={hotel.type3}
              onClick={() => setSelectedHotel(hotel)}
            />
          ))
        : ''}
    </Box>
  );
}
