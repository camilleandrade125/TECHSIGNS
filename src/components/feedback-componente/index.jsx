import "./style.css"

function Feedbackpage(){
    return(
        <>
        <main className="area-feedback-sections">
            <section className="area-info">
                <div>
                    <h1 className="slogam-feedback">Cada palavra sua é uma oportunidade de crescimento. Como podemos ajustar nosso site para tornar o aprendizado de informática uma experiência ainda mais incrível para você?</h1>
                    <img src="" alt="" />
                </div>
            </section>

            <section className="area-feedback">
                <div className="area-form">
                    <h1 className="titulo-feedback">FEEDBACK</h1>
                    <div className="aa">

                    </div>
                    <form className="form">
                        <textarea 
                        name="" 
                        id="" 
                        cols="20" 
                        rows="10"
                        placeholder="Escreva aqui...">
                        </textarea>
                        <button className="button-feedback">Enviar!</button>
                    </form>
                </div>
            </section>
        </main>
        </>
    )
}

export default Feedbackpage