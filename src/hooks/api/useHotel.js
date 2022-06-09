import useAsync from '../useAsync';

import * as hotelApi from '../../services/hotelApi';

export default function useHotelData() {
  const {
    data: hotel,
    loading: hotelLoading,
    error: hotelError,
    act: getHotel,
  } = useAsync(() => hotelApi.getHotelInformation({ eventId: 1 }));

  return {
    hotel,
    hotelLoading,
    hotelError,
    getHotel,
  };
}
