import './style.css';
import {Link} from 'react-router-dom'
import { CgArrowRightR } from "react-icons/cg";
import { LuGamepad2 } from "react-icons/lu";


function CardJogos ({img, nome_jogos, link}){
    return (
        

        <div className="flex">

            <div className="card">
                <img src={img}/>
                <div className='name-icons'>
                <LuGamepad2 color='white' fontSize={25}/>
                <span className="name-jogos">{nome_jogos}</span>
                </div>
                <div className='botao-niveis'>
                    <Link to={link} className="link-niveis"><span>NÍVEIS</span> <CgArrowRightR/></Link>
                </div>
            </div>

        </div>

        
    )
}

export default CardJogos