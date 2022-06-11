import api from './api';

export async function getHotelInformation({ eventId }) {
  const response = await api.get(`/events/${eventId}/accommodations`);
  console.log(response.data);
  return response.data;
}