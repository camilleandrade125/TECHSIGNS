import "./style.css"
import imagem1 from '../../../public/teste.png';
import Header from "../header";


function Bodysobre(){
    return  (
        <>
     <Header/>
     <div className="div-sobre">
        <img src={imagem1}></img>
     </div>


     
    

     </>
    )
}

export default Bodysobre




