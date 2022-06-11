import api from './api';

export async function getAccommodationsRooms(token) {
  const response = await api.get(`/rooms/accommodation/${2}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postAccommodationsRoom(roomId, reservationId, token) {
  const response = await api.post(`/rooms/${roomId}/reservation/${reservationId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
