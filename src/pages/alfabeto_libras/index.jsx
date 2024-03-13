import "./style.css"
import  Botao_Voltar  from "../../components/botao-voltar"
import { signals } from "../../mappers/signals";

// imports styled components
import { Titulo } from '../../components/styled-components';

function Alfabetopage(){

    return(
        <>
        <Botao_Voltar link_voltar='/menu'/>
        <main className="alfabeto">
        <div className="div-titulo-alfabeto-icon"><Titulo>ALFABETO EM LIBRAS</Titulo></div>
           <section className="section-alfabeto">

           {signals.map(signal => (
                <div className="card-alfabeto" key={signal.id}> 
                    <img src={signal.image} alt=""/>
                </div>
           ))}

           </section>
        
           </main>
        </>
    )
}

export default Alfabetopage