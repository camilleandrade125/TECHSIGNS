import "./style.css"
import { useState } from 'react'
import robo from '../../../public/robo!.gif'
import  Botao_Voltar  from "../../components/botao-voltar"
import maos_feed from '../../../public/feed-mãos.jpg'
import { PiRocketLaunchDuotone } from "react-icons/pi";
import { LiaStarSolid } from "react-icons/lia";


function Feedbackpage(){

    const [feedback, setFeedback] = useState('')
    const [avaliacao, setAvaliacao] = useState('')

    const handleSing = (e) => {
        e.preventDefault()
        console.log({feedback})
        console.log({avaliacao})
    }


    return(
        <>
        <Botao_Voltar link_voltar='/menu'/>
        <main className="area-feedback-sections">
            <section className="area-info">
                <div className="div-mensage">
                    <p className="mensage"></p>
                    <h1 className="slogam-feedback">Cada palavra sua é uma oportunidade de crescimento. Como podemos ajustar nosso site para tornar o aprendizado de informática uma experiência ainda mais incrível para você?</h1>
                </div>  
                    <img  className='img-maos-feed'src={maos_feed} alt="" />
            </section>

            <section className="area-feedback">
                <div className="area-form">
                    <h1 className="titulo-feedback">FEEDBACK</h1>
                    <div className="divisao">
                     <div className="teste">
                        <form className="avaliacao-feedback" onSubmit={handleSing}>
                            <div><input type="radio" name={avaliacao} value=" Muito-insatisfeito" onChange={(e)=>setAvaliacao(e.target.value)}/><span className="radio icon-amarelo"><LiaStarSolid /></span></div>  
                            <div><input type="radio" name={avaliacao} value=" Insatisfeito" onChange={(e)=>setAvaliacao(e.target.value)}/><span className="radio icon-amarelo"><LiaStarSolid/><LiaStarSolid/></span></div>
                            <div><input type="radio" name={avaliacao} value=" Neutro"onChange={(e)=>setAvaliacao(e.target.value)}/><span className="radio icon-amarelo"><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/></span></div>
                            <div><input type="radio" name={avaliacao} value=" Satisfeito " onChange={(e)=>setAvaliacao(e.target.value)}/><span className="radio icon-amarelo"><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/></span></div>
                            <div><input type="radio" name={avaliacao} value=" Muito-satisfeito " onChange={(e)=>setAvaliacao(e.target.value)}/><span className="radio icon-amarelo"><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/><LiaStarSolid/></span></div>
                        </form>
                        <img className="img-robo" src={robo} alt="gif do robo" />
                    
                     </div>
                    <form className="form" onSubmit={handleSing}>
                        <textarea 
                        name="" 
                        id="" 
                        cols="20" 
                        rows="10"
                        placeholder="Escreva aqui..." 
                        value={feedback}
                        onChange={(e)=>setFeedback(e.target.value)}
                        required>
                        </textarea>
                        <button className="button-feedback" type="submit">Enviar<PiRocketLaunchDuotone fontSize={30}/></button>
    
                    </form>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default Feedbackpage