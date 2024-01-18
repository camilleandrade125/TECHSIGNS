import "./style.css"
import imagem from '../../../public/erro.gif';
import HeaderLogin from "../header-login";


function Erro(){
    return  (
        <>
     <div className="div-erro">
        <img src={imagem}></img>
     </div>
     </>
    )
}

export default Erro