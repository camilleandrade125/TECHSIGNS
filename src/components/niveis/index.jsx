import "./style.css"
import img_jogo from '../../../public/fundo-card.png'
import { Link } from "react-router-dom"


function Niveis(){
    return(
     
        <>
         <main>
          
          <section className="section-img">
          </section>



          <section className="section-button">
              <div className="flex">
                  <div className="card">
                      <img src={img_jogo}/>
                      <div>
                          <Link className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card">
                      <img src={img_jogo}/>
                      <div>
                        <Link className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card">
                      <img src={img_jogo}/>  
                      <div>
                        <Link className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card">
                      <img src={img_jogo}/>  
                      <div>
                        <Link className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card">
                      <img src={img_jogo}/>  
                      <div>
                        <Link className="link-jogar">JOGAR</Link>
                      </div>
                  </div>
                </div>
           </section>
         </main>
        </>
    ) 
}

export default Niveis