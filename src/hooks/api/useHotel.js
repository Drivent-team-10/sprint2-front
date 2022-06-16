import useAsync from '../useAsync';

import * as hotelApi from '../../services/hotelApi';
import useToken from '../useToken';
import useEnrollment from './useEnrollment';
import { useEffect, useState } from 'react';

export default function useHotelData() {
  const token = useToken();

  const {
    data: hotels,
    loading: hotelLoading,
    error: hotelError,
    act: getHotel,
  } = useAsync(() => hotelApi.getHotelInformation({ token, eventId: 1 }));

  return {
    hotels,
    hotelLoading,
    hotelError,
    getHotel,
  };
}

export function useSelectedHotelData() {
  const token = useToken();
  const { enrollment } = useEnrollment();

  const [hotel, setHotel] = useState(null);

  useEffect(async () => {
    if (enrollment) {
      setHotel(await hotelApi.getSelectedHotelInformation({ token, eventId: 1, enrollmentId: enrollment.id }))
    }
  }, [enrollment]);

  return {
    hotel,
  };
}