import { StyledHotelTypography } from "./style";
import TypesSpan from "./TypesSpan";

export default function HotelDescription({ type1, type2, type3, capacityTotal, occupation }) {
  return (
    <>
      <StyledHotelTypography sx={{ lineHeigth: '1rem' }} color="textPrimary">
        <span><strong>Tipos de acomodação:</strong></span>
        <br />
        <TypesSpan type1={ type1 } type2={ type2 } type3={ type3 } />
      </StyledHotelTypography>
      <StyledHotelTypography color="textPrimary">
        <span><strong>Vagas disponíveis:</strong></span>
        <br />
        <span>{ capacityTotal - occupation } </span>
      </StyledHotelTypography>
    </>
  );
}