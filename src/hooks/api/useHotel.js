import useAsync from '../useAsync';

import * as hotelApi from '../../services/hotelApi';

export default function useHotelData() {
  const {
    data: hotels,
    loading: hotelLoading,
    error: hotelError,
    act: getHotel,
  } = useAsync(() => hotelApi.getHotelInformation({ eventId: 1 }));

  return {
    hotels,
    hotelLoading,
    hotelError,
    getHotel,
  };
}
