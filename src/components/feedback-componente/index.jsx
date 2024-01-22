import "./style.css"
import robo from '../../../public/robo.gif'

function Feedbackpage(){
    return(
        <>
        <main className="area-feedback-sections">
            <section className="area-info">

                
                <div className="div-mensage">
                    <p className="mensage">aaaaaaa</p>
                    <hr className="linha"/>
                    <h1 className="slogam-feedback">Cada palavra sua é uma oportunidade de crescimento. Como podemos ajustar nosso site para tornar o aprendizado de informática uma experiência ainda mais incrível para você?</h1>
                </div>  

               
                    <img className="img-robo" src={robo} alt="gif do robo" />
               
                
            </section>

            <section className="area-feedback">
                <div className="area-form">
                    <h1 className="titulo-feedback">FEEDBACK</h1>
                    <div className="avaliacao-feedback">

                    </div>
                    <form className="form">
                        <textarea 
                        name="" 
                        id="" 
                        cols="20" 
                        rows="10"
                        placeholder="Escreva aqui...">
                        </textarea>
<<<<<<< HEAD
=======
                        <button className="button-feedback"><strong>Enviar Avaliação!</strong></button>
>>>>>>> efb60cd478c040418f9fe5a90dcf5dd43b6dcc39
                    </form>
                    <div>
                        <button className="button-feedback">Enviar!</button>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default Feedbackpage