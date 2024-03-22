import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css"
import  Botao_Voltar  from "../../components/botao-voltar"
import { useLocation } from 'react-router-dom';
import perfil_img from "../../../public/perfil-img.png";

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

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [genero, setGenero] = useState('')
  const [data, setData] = useState('')

  const prevent = (e) => {
        e.preventDefault()
        console.log({nome})
        console.log({email})
        console.log({genero})
        console.log({data})
  }

  return (
    <>
    <Botao_Voltar link_voltar='/menu'/>
    <section className='perfil-section'>
      <img src={perfil_img} alt="" />
        <div className='perfil'>
          <Titulo>Perfil do Usuário</Titulo>
          <form className='form' onSubmit={prevent}>
            <ul className='lista-perfil'>
              <li><span className='input-conta'>Nome:</span><input className='input-valor' type="text" placeholder={userData.nome_completo} onChange={(e)=>setNome(e.target.value)}/><MdOutlineBadge className='icon-perfil'/></li>
              <li><span className='input-conta'>Email:</span><input className='input-valor' type="text" placeholder={userData.nome_completo} onChange={(e)=>setEmail(e.target.value)}/><MdOutlineEmail className='icon-perfil'/></li>
              <li><span className='input-conta'>Genero:</span><input className='input-valor' type="text" placeholder={userData.nome_completo} onChange={(e)=>setGenero(e.target.value)}/><VscAccount className='icon-perfil'/></li>
              <li><span className='input-conta'>Data:</span><input className='input-valor' type="text" placeholder={userData.nome_completo} onChange={(e)=>setData(e.target.value)}/><BsCalendarDate className='icon-perfil'/></li>
            </ul>   
            <button className="button-feedback estilo-botao-global" type="submit">salvar</button>
          </form>   
        </div>
      </section>
    </>
  );
};

export default Profile;
