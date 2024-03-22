import "./style.css"
import { useState } from 'react'
import robo from '../../../public/robo.gif'
import  Botao_Voltar  from "../../components/botao-voltar"
import fundo from '../../../public/img-feedback.png'
import { PiRocketLaunchDuotone } from "react-icons/pi";
import { LiaStarSolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";

import { Titulo } from '../../components/styled-components';


function Feedbackpage(){

    const [feedback, setFeedback] = useState('')
    const [rating, setRating] = useState(null)

    const [hover, setHover] = useState(null)

    const handleSing = (e) => {
        e.preventDefault()
        console.log({feedback})
        console.log({rating})
    }


    return(
        <>
        <Botao_Voltar link_voltar='/menu'/>
        <main className="area-feedback-sections">
            <section className="area-info">
                <div className="div-mensage">
                    <h1 className="slogam-feedback">Cada palavra sua é uma oportunidade de crescimento. Como podemos ajustar nosso site para tornar o aprendizado de informática uma experiência ainda mais incrível para você ?</h1>
                </div>  
                    <img  className='img-feedback' alt="" src={fundo}/>
            </section>

            <section className="area-feedback">
                <div className="area-form">
                <div className="div-titulo-icon"><Titulo>FEEDBACK </Titulo></div>
                    <div className="divisao">
                        <form className="avaliacao-feedback" onSubmit={handleSing}>
                            {[...Array(5)].map((estrela, index) => {
                                const classificacaoAtual = index + 1;
                                return (
                                <label>
                                    <input 
                                        type="radio" 
                                        value={classificacaoAtual}
                                        name="rating"
                                        onClick={() => setRating(classificacaoAtual)}

                                    />
                                    
                                    <LiaStarSolid 
                                        className="estrela" 
                                        size={60}
                                        color={classificacaoAtual <= (hover || rating) ? "#ffff00" : "#e4e5e9"}
                                        onMouseEnter={() => setHover(classificacaoAtual)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                                )
                            })}
                        </form>
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
                        <button className="button-feedback estilo-botao-global" type="submit">Enviar<PiRocketLaunchDuotone fontSize={30}/></button>
    
                    </form>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default Feedbackpage