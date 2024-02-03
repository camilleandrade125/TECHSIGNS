import "./style.css"
import { Link } from "react-router-dom"


function Niveis(){
    return(
     
        <>
         <main>
          <section className="card-flex">
            <div className="cards">
            <div className="niveis">
            <h3>NÍVEL</h3>
            <span className="nivel">1</span>
            </div>
            <div className="card-metade">
              <span className="fases">Fases</span>
                <div className="botoes-flex">
                  <Link className="botoes-jogar-1 botoes-style"></Link>
                  <Link className="botoes-jogar-2 botoes-style"></Link>
                  <Link className="botoes-jogar-3 botoes-style"></Link>
                  <Link className="botoes-jogar-4 botoes-style"></Link>
                  <Link className="botoes-jogar-5 botoes-style"></Link>
                </div>
              </div>
            </div>

            

          </section>
         </main>
        </>
    ) 
}

export default Niveis