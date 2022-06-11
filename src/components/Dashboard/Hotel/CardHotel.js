import { BoxHotel, Description, StyledHotelTypography } from "./style";

export default function CardHotel({ accommodation, type1, type2, type3 }) {
    const {
        id,
        name,
        capacityTotal,
        occupation,
    } = accommodation;

    return (
        <BoxHotel>
            <img width='168px' height='109px' style={{ borderRadius: '5px', objectFit: 'cover' }} src='https://http.cat/409.jpg' />
            <StyledHotelTypography variant="h6" color="textPrimary">
                { name }
            </StyledHotelTypography>
            <Description>
                <StyledHotelTypography sx={{ lineHeigth: '1rem' }} color="textPrimary">
                    <span><strong>Tipos de acomodação:</strong></span>
                    <br />
                    <span>
                        {
                            type1 ?
                                'Single'
                            : ''
                        }
                        {
                            type2 ?
                                type1 ?
                                    ', Double'
                                : 'Double'
                            : ''
                        }
                        {
                            type3 ?
                                type2 | type1 ?
                                    ', Triple'
                                : 'Triple'
                            : ''
                        }
                    </span>
                </StyledHotelTypography>
                <StyledHotelTypography color="textPrimary">
                    <span><strong>Vagas disponíveis:</strong></span>
                    <br />
                    <span>{ capacityTotal - occupation } </span>
                </StyledHotelTypography>
            </Description>
        </BoxHotel>
    );
}
