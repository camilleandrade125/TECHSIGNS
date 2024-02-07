import './style.css';
import {Link} from 'react-router-dom'
import { SlActionUndo } from "react-icons/sl";

function Botao_Voltar({link_voltar}){
    return(
        <div className='botao-voltar-div'>
        <Link to={link_voltar} className="botao-voltar"><SlActionUndo fontSize={25}/></Link>
        </div>
    )

}
export default Botao_Voltar