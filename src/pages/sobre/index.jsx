import "./style.css"
import Bodysobre from "../../components/sobre-componente"
import  Botao_Voltar  from "../../components/botao-voltar"

function MenuSobre(){
    return(
        <>
        <Botao_Voltar link_voltar='/menu'/>
        <Bodysobre/>

        </>
    )
}

export default MenuSobre
