import api from './api';

export async function getPaymentInformations({ eventId, token }) {
    try {
      const response = await api.get(`/payments/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    
      return response.data;
  
    } catch (error) {
      console.error();
    }
}