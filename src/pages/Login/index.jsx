import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../../services/firebase';
import './style.css';
import LoadScreen from '../../componentes/LoadScreem';
import logo2 from '../../assets/logo2.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Estado para controlar o spinner
  const [error, setError] = useState(false); // Estado para controlar a mensagem de erro
  const navigate = useNavigate(); //Router para navegação

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true); // Ativar spinner de carregamento
    setError(false); // Resetar o estado de erro

    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      // Signed in
      const user = userCredential.user;
      //console.log('Login bem-sucedido:', user.email);

      // Simular uma operação assíncrona (por exemplo, aguardar 5.5 segundos)
      await new Promise(resolve => setTimeout(resolve, 5500));

      //navigate('/dashboard'); // Redirecionar para a página de dashboard após a animação

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erro ao fazer login:', errorCode, errorMessage);
      setError(true); // Ativar mensagem de erro
    } finally {
      setLoading(false); // Desativar spinner de carregamento, independentemente do resultado do login
    }
  };

  return (
    <div className="container">
      {loading && <LoadScreen />} {/* Renderizar LoadScreen se loading for true */}
      <form onSubmit={handleSubmit}>
        <img src={logo2} alt="logo" className='imgLogo' />
        <div className="boxLogin">
          <h1><i className="bi bi-box-arrow-in-right"></i>Login/Entrar</h1>
          <p>Por favor digite suas informações de login</p>
          {error && <p className="error-message">Usuário ou senha incorretos</p>} {/* Mostrar mensagem de erro */}
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder='email@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? 'error-input' : ''} // Adicionar classe de erro se error for true
          />
          <span>Senha</span>
          <input
            type="password"
            name='password'
            placeholder='************'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error ? 'error-input' : ''} // Adicionar classe de erro se error for true
          />
          <button type='submit' disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'} <i className="bi bi-arrow-right"></i>
          </button>
          <div className='boxRegs'>
            <Link to="/PassUpdate">Esqueceu sua senha?</Link>
            <label>Não tenho conta!<Link to="Register">Cadastrar agora</Link></label>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Login;
