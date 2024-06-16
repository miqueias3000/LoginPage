import React, { useEffect } from 'react';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import MainSection from '../../componentes/MainSection/';
import Sidebar from '../../componentes/Sidebar/';
import SkillCard from '../../componentes/SkillCard/';
import './style.css';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Função para verificar se o usuário está autenticado
    const checkAuth = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          // Se o usuário não estiver autenticado, redireciona para a página de login
          navigate('/');
        }
      });
    };

    checkAuth(); // Chama a função de verificação ao montar o componente

    // Cleanup da função de verificação ao desmontar o componente
    return () => {
      // Remove o listener do Firebase para evitar vazamentos de memória
      firebase.auth().onAuthStateChanged(() => { });
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      navigate('/'); // Redireciona para a página de login após logout
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="boxDashboard">
          <h1><i className="bi bi-speedometer2"></i> Dashboard</h1>
          <p>Bem-vindo ao seu painel de controle!</p>
          {/**<button onClick={handleLogout}>Logout</button> */}
        </div>
        <div className="contSection">
          <div className="sectionMain">
            <MainSection />
            <SkillCard />
          </div>
          <div className="sectionMain">
            <MainSection />
            <SkillCard />
          </div>
          <div className="sectionMain">
            <MainSection />
            <SkillCard />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
