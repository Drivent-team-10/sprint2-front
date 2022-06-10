import api from './api';

export async function getAccommodationsRooms(token) {
  const response = await api.get(`/rooms/accommodation/${2}`);

  return response.data;
}
