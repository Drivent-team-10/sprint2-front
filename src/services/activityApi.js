import api from './api';

export async function getActivitiesByEventId(eventId, token) {
  const response = await api.get(`/activities/${eventId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getActivityVacancies({ token, activityId }) {
  const response = await api.get(`activities/${activityId}/occupation`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}