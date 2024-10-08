import React, { useState } from 'react';
import firebase from '../../services/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

//função para cadastrar um novo usuario
  const handleSubReg = async (event) => {
    event.preventDefault();
    
    try{
      const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      //console.log('usuario cadastrado com sucesso!')
    }catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erro ao fazer o cadastro:', errorCode, errorMessage);
      setError(true); // Ativar mensagem de erro 
    }
  }


  return (
    <>
      <div className="ContainerRegis">
        <h1>Cadastro de Usuario</h1>
      </div>
      <form onSubmit={handleSubReg}>
        <span>Email</span>
        <input
          type="text"
          name="name"
          placeholder='Nome de Usuario'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>Senha</span>
        <input
          type="password"
          name='password'
          placeholder='Digitar Senha'
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type='submit'>Cadastrar</button>
        <div className="boxRegs">
          <Link to="/">Voltar para o Login</Link>
        </div>

      </form>
    </>
  );
};

export default Register;