import { createContext, useState } from 'react';

const HotelContext = createContext();
export default HotelContext;

export function HotelProvider({ children }) {
  const [hotelInfo, setHotelInfo] = useState({
    id: null,
    name: null,
    capacityTotal: null,
    occupation: null,
    type1: null,
    type2: null,
    type3: null,
  });
  
  function handleChange(hotel) {
    setHotelInfo({ ...hotel })
  }
  console.log(hotelInfo);

  return (
    <HotelContext.Provider value={{ hotelInfo, setHotelInfo, handleChange }}>
      {children}
    </HotelContext.Provider>
  );
}
