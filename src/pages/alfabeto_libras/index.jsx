import "./style.css"
import  Botao_Voltar  from "../../components/botao-voltar"
import { signals } from "../../mappers/signals";

function Alfabetopage(){

    return(
        <>
        <Botao_Voltar link_voltar='/menu'/>
        <div className="totalf">
           <section className="alf">

           {signals.map(signal => (
                <div className="alfabeto-menu" key={signal.id}> 
                    <img src={signal.image} alt=""/>
                </div>
           ))}

           </section>
        
        </div>
        </>
    )
}

export default Alfabetopage