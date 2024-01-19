import "./style.css"
import imagem1 from '../../../public/Camille.png';
import CardInformacoes from "../cards/card-informacoes";

function Bodysobre(){
    return  (
    <>

        <CardInformacoes
            fotoPerfil="https://avatars.githubusercontent.com/u/98554053?v=4"
            cargo="Front-End Developer" 
            email="camilleandrade12@gmail.com" 
            github="https://github.com/camilleandrade125" 
            localidade="Belém-PA" 
            numeroTelefone="985940434" 
            nome="camille andrade"
        />
        
        <div className="div-sobre">
            <img src={imagem1}></img>
        </div>

     </>
    )
}

export default Bodysobre




