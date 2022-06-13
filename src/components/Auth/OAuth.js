import { useEffect, useContext } from 'react';
import { signIpWithGithub } from '../../services/userApi';
import UserContext from '../../contexts/UserContext';
import Splash from '../Splash';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function GitHubOAuthPage() {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      async function login() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        const data = await signIpWithGithub(code);
        console.log('userData: ', data);

        setUserData(data);
        toast('Login realizado com sucesso!');
        navigate('/dashboard');
      }
      login();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return <Splash loading={true} message="Carregando informações do github" />;
}
