import { Box } from "@material-ui/core";
import CardHotel from "./CardHotel";
import { BoxHotel, StyledHotelTypography } from "./style";

export default function HotelSelected({
    id,
    name,
    image,
    capacityTotal,
    occupation,
    type1,
    type2,
    type3,
    hotelSelected,
  }) {
  return (
    <Box
      display="flex"
      alignSelf="flex-start"
      justifySelf="left"
      bgcolor='#ffeed2'
      borderRadius='10px'
      padding='0px 20px'
    >
      <CardHotel
        key={Math.random()}
        id={id}
        name={name}
        image={image}
        capacityTotal={capacityTotal}
        occupation={occupation}
        type1={type1}
        type2={type2}
        type3={type3}
        hotelSelected={hotelSelected}
      />
    </Box>
  );
}