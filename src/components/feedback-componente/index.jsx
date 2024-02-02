import "./style.css"
import { useState } from 'react'
import robo from '../../../public/robo!.gif'

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
        <main className="area-feedback-sections">
            <section className="area-info">
                <div className="div-mensage">
                    <p className="mensage">Olá!!!</p>
                    <h1 className="slogam-feedback">Cada palavra sua é uma oportunidade de crescimento. Como podemos ajustar nosso site para tornar o aprendizado de informática uma experiência ainda mais incrível para você?</h1>
                </div>  
                    
            </section>

            <section className="area-feedback">
                <div className="area-form">
                    <h1 className="titulo-feedback">FEEDBACK</h1>
                     <div className="teste">
                        <form className="avaliacao-feedback" onSubmit={handleSing}>
                            <div><input type="radio" name={avaliacao} value="Muito-satisfeito" onChange={(e)=>setAvaliacao(e.target.value)}/><span className="radio">Muito satisfeito</span></div>  
                            <div><input type="radio" name={avaliacao} value="Satisfeito" onChange={(e)=>setAvaliacao(e.target.value)}/><span className="radio">Satisfeito</span></div>
                            <div><input type="radio" name={avaliacao} value="Neutro"onChange={(e)=>setAvaliacao(e.target.value)}/><span className="radio">Neutro</span></div>
                            <div><input type="radio" name={avaliacao} value="Insatisfeito" onChange={(e)=>setAvaliacao(e.target.value)}/><span className="radio">Insatisfeito</span></div>
                            <div><input type="radio" name={avaliacao} value="Muito-insatisfeito" onChange={(e)=>setAvaliacao(e.target.value)}/><span className="radio">Muito insatisfeito</span></div>
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
                        <button className="button-feedback" type="submit">Enviar!</button>
                    </form>
                </div>
            </section>
        </main>
        </>
    )
}

export default Feedbackpage