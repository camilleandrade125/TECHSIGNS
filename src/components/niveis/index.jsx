import "./style.css"
import img_nivel_1 from '../../../public/img-card-nivel1.png'
import img_nivel_2 from '../../../public/img-card-nivel2.png'
import img_nivel_3 from '../../../public/img-card-nivel3.png'
import img_nivel_4 from '../../../public/img-card-nivel4.png'
import img_nivel_5 from '../../../public/img-card-nivel5.png'
import img_fundo_niveis from '../../../public/techsings-fundo-niveis.jpg'
import { Link } from "react-router-dom"


function Niveis(){
    return(
     
        <>
         <main>
          
          <section className="section-img">
          </section>



          <section className="section-card-nivel">
              <div className="flex-nivel">
                  <div className="card-nivel">
                      <img src={img_nivel_1}/>
                      <div>
                          <Link to="/g1nivel1" className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card-nivel">
                      <img src={img_nivel_2}/>
                      <div>
                        <Link to="/g1nivel2" className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card-nivel">
                      <img src={img_nivel_3}/>  
                      <div>
                        <Link to="/g1nivel3"  className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card-nivel">
                      <img src={img_nivel_4}/>  
                      <div>
                        <Link to="/g1nivel4" className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card-nivel">
                      <img src={img_nivel_5}/>  
                      <div>
                        <Link to="/g1nivel5" className="link-jogar">JOGAR</Link>
                      </div>
                  </div>
                </div>
           </section>
         </main>
        </>
    ) 
}

export default Niveis