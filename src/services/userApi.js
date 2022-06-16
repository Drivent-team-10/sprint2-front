import api from './api';

export async function signUp(email, password) {
  const response = await api.post('/users', { email, password });
  return response.data;
}

export async function signIpWithGithub(code) {
  const response = await api.post(`/auth/oauth/github/login`, { code });

  return response.data;
}
//
