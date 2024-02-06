import './style.css';
import {Link} from 'react-router-dom'

function CardJogos ({img, nome_jogos, link}){
    return (
        

        <div className="flex">

            <div className="card">
                <img src={img}/>
                <span className="name-jogos">{nome_jogos}</span>
                <div>
                    <Link to={link} className="link-niveis">NÍVEIS!</Link>
                </div>
            </div>

        </div>

        
    )
}

export default CardJogos