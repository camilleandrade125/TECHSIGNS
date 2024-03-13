import './style.css';

import { Botao_niveis } from '../../styled-components';

function CardNiveis ({nivel, link_1, link_2, link_3, link_4, link_5}){
    return(
        <>
        <div className="cards">
        <div className="niveis">
          <h3>NÍVEL</h3>
          <span className="nivel">{nivel}</span>
        </div>
        <div className="card-metade">
          <div className="fases"><span>FASES</span></div>
            <div className="botoes-flex">
              <Botao_niveis to={link_1} className="botoes-jogar-1"></Botao_niveis>
              <Botao_niveis to={link_2} className="botoes-jogar-2"></Botao_niveis>
              <Botao_niveis to={link_3} className="botoes-jogar-3"></Botao_niveis>
              <Botao_niveis to={link_4} className="botoes-jogar-4"></Botao_niveis>
              <Botao_niveis to={link_5} className="botoes-jogar-5"></Botao_niveis>
            </div>
          </div>
        </div>
     </>
    )
}

export default CardNiveis

