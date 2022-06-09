import { createContext, useState } from 'react';

const HotelContext = createContext();
export default HotelContext;

export function HotelProvider({ children }) {
  const [hotelInfo, setHotelInfo] = useState({
    id: null
  });

  function handleChange(key, value) {
    setHotelInfo({ [key]: value, ...hotelInfo })
  }

  return (
    <HotelContext.Provider value={{ hotelInfo, setHotelInfo, handleChange }}>
      {children}
    </HotelContext.Provider>
  );
}
