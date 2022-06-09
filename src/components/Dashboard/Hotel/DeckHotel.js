import { Box } from "@material-ui/core";
import useHotel from "../../../hooks/useHotel";
import CardHotel from "./CardHotel";

export default function DeckHotel() {
  const { hotels } = useHotel;
  console.log(hotels);
  return (
    <Box display="flex" flexWrap="wrap" sx={{ gap: 15 }} alignSelf="flex-start" justifySelf="left" width="100%" height="100%">
      {
        hotels.length ?
          hotels.map((hotel) => <CardHotel />)
        : ''
      }
    </Box>
  );
}
