import './style.css';
import {Link} from 'react-router-dom'
import { HiOutlineArrowSmDown } from "react-icons/hi";
function CardNiveis ({nivel, link_1, link_2, link_3, link_4, link_5}){
    return(
        <>
        <div className="cards">
        <div className="niveis">
          <h3>NÍVEL</h3>
          <span className="nivel">{nivel}</span>
        </div>
        <div className="card-metade">
          <div className="fases"><span>Fases</span><HiOutlineArrowSmDown/></div>
            <div className="botoes-flex">
              <Link to={link_1} className="botoes-jogar-1 botoes-style">.</Link>
              <Link to={link_2} className="botoes-jogar-2 botoes-style">.</Link>
              <Link to={link_3} className="botoes-jogar-3 botoes-style">.</Link>
              <Link to={link_4} className="botoes-jogar-4 botoes-style">.</Link>
              <Link to={link_5} className="botoes-jogar-5 botoes-style">.</Link>
            </div>
          </div>
        </div>
     </>
    )
}

export default CardNiveis