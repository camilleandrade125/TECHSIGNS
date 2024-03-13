import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Titulos das Paginas
export const Titulo = styled.h2`
    font-size: 30px;
    color: yellow;
    font-family:  'PaytoneOne', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: black 0.1em 0.1em;
    letter-spacing: 7px;
    display: flex;
    justify-content: center;
`;

// Dscrição dos jogos
export const Paragrafo_info_jogo = styled.p`
    color: aliceblue;
    font-size: 19px;
    text-align: justify;
    font-weight: 500;
    color: #d1d6e4;
    background-color: #0723544b;
    border-radius: 10px;
    font-family:  'PaytoneOne', sans-serif;
    font-weight: 800; 
    width: 800px;
    padding: 10px 20px 10px 20px;
    letter-spacing: 2px;
`;

// Botão de niveis 
export const Botao_niveis = styled(Link)`
    height: 50px;
    width: 50px;
    background-position: center;
    background-size: contain;
    border-radius: 10px;
    border: 2px solid #1D57BB;
    box-shadow: 2px 5px 0 #aaaa;
    cursor: pointer;
   
    &:active{
    box-shadow: none;
    transform: translateY(5px);
    }
`;
