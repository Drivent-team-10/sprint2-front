import { BoxHotel, Description, StyledHotelTypography } from "./style";

export default function CardHotel() {
    return (
        <BoxHotel>
            <img width='168px' height='109px' style={{ borderRadius: '5px', objectFit: 'cover' }} src='https://http.cat/409.jpg' />
            <StyledHotelTypography variant="h6" color="textPrimary">
                Driven Resort
            </StyledHotelTypography>
            <Description>
                <StyledHotelTypography sx={{ lineHeigth: '1rem' }} color="textPrimary">
                    <span><strong>Tipos de acomodação:</strong></span>
                    <br />
                    <span>Single e Double</span>
                </StyledHotelTypography>
                <StyledHotelTypography color="textPrimary">
                    <span><strong>Vagas disponíveis:</strong></span>
                    <br />
                    <span>25</span>
                </StyledHotelTypography>
            </Description>
        </BoxHotel>
    );
}
