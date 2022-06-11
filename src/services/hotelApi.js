import api from './api';

export async function getHotelInformation({ eventId }) {
  const response = await api.get(`/events/${eventId}/accommodations`);

  return response.data;
}