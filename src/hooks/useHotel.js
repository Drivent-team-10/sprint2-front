import { useContext } from 'react';
import HotelContext from '../contexts/HotelContext';

export default function useHotel() {
  const hotelContext = useContext(HotelContext);
  return hotelContext;
}
