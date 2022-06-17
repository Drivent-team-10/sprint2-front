import api from './api';

export async function getHotelInformation({ token, eventId }) {
  const response = await api.get(`/events/${eventId}/accommodations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getSelectedHotelInformation({ token, eventId, enrollmentId }) {
  const response = await api.get(`events/${eventId}/enrollments/${enrollmentId}/accommodations`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}