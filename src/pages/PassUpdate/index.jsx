import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../services/firebase'; // Importe o arquivo de configuração do Firebase
import './style.css';

const PassUpdate = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setMessage('Um email foi enviado para redefinir sua senha. Verifique sua caixa de entrada.');
    } catch (error) {
      console.error('Erro ao enviar email de redefinição de senha:', error.message);
      setMessage('Ocorreu um erro ao tentar enviar o email. Verifique se o endereço está correto.');
    }
  };

  return (
    <div className="container">
      <h1>Atualizar Senha</h1>
      <p>Para redefinir sua senha, siga estes passos:</p>
      <ol>
        <li>Insira seu endereço de email abaixo.</li>
        <li>Clique no botão "Redefinir Senha".</li>
        <li>Verifique sua caixa de entrada para um email com instruções de como redefinir sua senha.</li>
      </ol>
      <form onSubmit={handleResetPassword}>
        <div className="boxPassUpdate">
          <span>Email</span>
          <input
            type="email"
            name="email"
            placeholder='joao@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit'>Redefinir Senha</button>
        </div>
        {message && <p className="message">{message}</p>}
      </form>
      <div className="boxRegs">
        <Link to="/">Voltar para o Login</Link>
      </div>
    </div>
  );
};

export default PassUpdate;
