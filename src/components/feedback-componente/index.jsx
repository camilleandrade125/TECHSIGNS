import "./style.css"
import { useState } from 'react'
import robo from '../../../public/robo.gif'

function Feedbackpage(){

    const [feedback, setFeedback] = useState('')

    const handleSing = (e) => {
        e.preventDefault()
        console.log({feedback})
    }


    return(
        <>
        <main className="area-feedback-sections">
            <section className="area-info">
                <div className="div-mensage">
                    <p className="mensage">aaaaaaa</p>
                    <h1 className="slogam-feedback">Cada palavra sua é uma oportunidade de crescimento. Como podemos ajustar nosso site para tornar o aprendizado de informática uma experiência ainda mais incrível para você?</h1>
                </div>  
                    <img className="img-robo" src={robo} alt="gif do robo" />
            </section>

            <section className="area-feedback">
                <div className="area-form">
                    <h1 className="titulo-feedback">FEEDBACK</h1>
                    <div className="avaliacao-feedback">

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