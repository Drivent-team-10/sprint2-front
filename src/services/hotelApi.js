import api from './api';

export async function getHotelInformation({ eventId }) {
  try {
    const response = await api.get(`/events/${eventId}/accommodations`);
    return response.data;
  } catch (error) {
    console.error();
  }
}