import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css"
import { useLocation } from 'react-router-dom';

// imports react icons
import { MdOutlineEmail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { BsCalendarDate } from "react-icons/bs";
import { GoFileBinary } from "react-icons/go";
import { MdOutlineBadge } from "react-icons/md";

// imports styled components
import { Titulo } from '../../components/styled-components';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const location = useLocation();
  const token = location.state?.token;

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
      } catch (error) {
        console.error('Erro ao obter dados do perfil:', error.message);
      }
    };

    getProfileData();
  }, [token]);

  return (
    <div className='perfil'>
      <Titulo>Perfil do Usuário</Titulo>
      <ul className='lista-perfil'>
        <li>Nome: {userData.nome_completo}<MdOutlineBadge className='icon-perfil'/></li>
        <li>Email: {userData.email} <MdOutlineEmail className='icon-perfil'/></li>
        <li>CPF: {userData.cpf} <GoFileBinary className='icon-perfil'/></li>
        <li>Gênero: {userData.genero}<VscAccount className='icon-perfil'/></li>
        <li>Data de Nascimento: {userData.data_nascimento}<BsCalendarDate className='icon-perfil'/></li>
      </ul>
    </div>
  );
};

export default Profile;
