import { useEffect, useState } from 'react';
import useHotel from '../../../hooks/useHotel';
import HotelDescription from './HotelDescription';
import HotelSelectedDescription from './HotelSelectedDescription';

import { BoxHotel, Description, StyledHotelTypography } from "./style";

export default function CardHotel({
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
  const { hotelInfo } = useHotel();

	let [selected, setSelected] = useState(false);
	const { handleChange } = useHotel();
	
	useEffect(() => {
    if (hotelInfo && hotelInfo.id === id) {
      setSelected(true);
    }

    if(hotelSelected) {
      setSelected(true);
    }
  }, [hotelInfo, selected])
  
	return (
		<BoxHotel
				value={selected}
				onClick={(e) => {
					handleChange({
						id,
            name,
            image,
            capacityTotal,
            occupation,
						type1,
						type2,
						type3,
					});
				}}
        disabled={ !!hotelSelected }
        selected={ selected }
		>
			<img width='168px' height='109px' style={{ borderRadius: '5px', objectFit: 'cover' }} src={ image } />
			<StyledHotelTypography variant="h6" color="textPrimary">
				{ name }
			</StyledHotelTypography>
			<Description>
				{
          !hotelSelected ?
            <HotelDescription
              type1={ type1 }
              type2={ type2 }
              type3={ type3 }
              capacityTotal={ capacityTotal}
              occupation={ occupation }
            />
          : 
            <HotelSelectedDescription
              number={ hotelSelected?.number }
              type={ hotelSelected?.type?.name }
              capacityTotal={ capacityTotal}
              occupation={ occupation }
            />
        }
			</Description>
				
		</BoxHotel>
	);
}
