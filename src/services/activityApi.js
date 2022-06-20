import api from './api';

export async function getActivitiesByEventId(eventId, token) {
  const response = await api.get(`/activities/${eventId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postActivityEnrollment(eventId, activityId, token) {
  const response = await api.post(`/activities/${eventId}/enroll/${activityId}`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
