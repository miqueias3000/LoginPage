import React from 'react';
import { FaHome, FaUser, FaCalendar, FaChartBar, FaSignOutAlt, FaDashcube } from 'react-icons/fa';
import { RiTeamFill } from "react-icons/ri";
import { BsSpeedometer2 } from "react-icons/bs";
import { RiDashboard3Line } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './style.css';

import logo from '../../assets/logo.png'

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      // Redireciona para pagina de Login
      navigate('/'); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-logo">
          <img src={logo} alt="" />
        </li>
        <li>
          <Link to="/dashboard">
            <BsSpeedometer2 className="icon" />
            <span className="nav-item">Dashboard</span>
          </Link>
        </li>
        <li>
          <a href="#">
            <FaUser className="icon" />
            <span className="nav-item">Membros</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdEventNote className="icon" />
            <span className="nav-item">Eventos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <RiTeamFill className="icon" />
            <span className="nav-item">Equipe Min</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={handleLogout}>
            <FaSignOutAlt className="icon" />
            <span className="nav-item">Sair</span>
          </a>
        </li>
      </ul>
      <span className="versao">Versão 1.0.0</span>
    </div>
  );
};

export default Sidebar;
