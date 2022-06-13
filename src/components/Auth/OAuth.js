import { useEffect } from 'react';
import Splash from '../Splash';
import { signIpWithGithub } from '../../services/userApi';

export default function GitHubOAuthPage() {
  useEffect(() => {
    try {
      async function login() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log('code: ', code);

        const response = await signIpWithGithub(code);
        localStorage.setItem('token', response.data.token);
      }
      login();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return <Splash loading={true} message="Carregando informações do github" />;
}
