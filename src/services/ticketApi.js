/* eslint-disable no-console */
import api from './api';

export async function reserveTicket(body, token) {
  const { type, accommodation, cardData } = body;

  const response = await api.post(
    '/reservations',
    {
      type,
      accommodation,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  await api.post(
    `/reservations/${response.data.id}/payment`,
    {
      number: cardData.cardNumber,
      name: cardData.cardName,
      validThru: cardData.cardExpiration,
      cvc: cardData.cardSecurityCode,
      reservationId: response.data.id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

export async function getTypeOfTicket(token) {
  const response = await api.post(
    '/reservations',
    {
      type,
      accommodation,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  await api.post(`/reservations/${response.data.reservationId}/payment`, cardData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getReservation(id, token) {
  const response = await api.get(`/reservations/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
