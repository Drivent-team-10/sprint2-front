import api from './api';

export async function getHotelInformation({ eventId }) {
  const response = await api.get(`/events/${eventId}/accommodations`);

  return response.data;
}

export async function getSelectedHotelInformation({ enrollmentId }) {
  const response = await api.get(`enrollments/${enrollmentId}/accommodations`);

  return response.data;
}