import api from './api';

export async function getAccommodationsRooms(id, token) {
  const response = await api.get(`/rooms/accommodation/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postAccommodationsRoom(roomId, reservationId, token) {
  const response = await api.post(
    `/rooms/${roomId}/reservation/${reservationId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}
