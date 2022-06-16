import { StyledHotelTypography } from "./style";

export default function HotelSelectedDescription({ number, type, capacityTotal, occupation }) {
  return (
    <>
      <StyledHotelTypography sx={{ lineHeigth: '1rem' }} color="textPrimary">
        <span><strong>Quarto reservado</strong></span>
        <br />
        <span>{ number } ({ type })</span>
      </StyledHotelTypography>
      <StyledHotelTypography color="textPrimary">
        <span><strong>Pessoas no seu quarto</strong></span>
        <br />
        <span>
            Você
            {
                occupation > 1 ?
                    ` e mais ${ occupation - 1 }`
                : ''
            }
        </span>
      </StyledHotelTypography>
    </>
  );
}
