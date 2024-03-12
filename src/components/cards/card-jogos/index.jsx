import './style.css';
import {Link} from 'react-router-dom'
import { FaHandPointRight } from "react-icons/fa6";
import { LuGamepad2 } from "react-icons/lu";


function CardJogos ({img, nome_jogos, link}){
    return (
    <>

            <div className="card">
            <div className='logo-jogo'><LuGamepad2 color='#0B1E3F' fontSize={25} /></div>
                <img src={img} />
                <div className='conteudo-jogo'>
                    <Link to={link} className="link-niveis estilo-botao-global"><span className="name-jogos">{nome_jogos}</span> <FaHandPointRight /></Link>
                </div>
            </div>
        </>

    )
}

export default CardJogos