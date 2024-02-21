import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css"
import { useLocation } from 'react-router-dom';

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
      <h2>Perfil do Usuário</h2>
      <ul>
        <li>Nome: {userData.nome_completo}</li>
        <li>Email: {userData.email}</li>
        <li>CPF: {userData.cpf}</li>
        <li>Gênero: {userData.genero}</li>
        <li>Data de Nascimento: {userData.data_nascimento}</li>
      </ul>
    </div>
  );
};

export default Profile;
