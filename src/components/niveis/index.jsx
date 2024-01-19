import "./style.css"
import img_nivel_1 from '../../../public/img-card-nivel1.png'
import img_nivel_2 from '../../../public/img-card-nivel2.png'
import img_nivel_3 from '../../../public/img-card-nivel3.png'
import img_nivel_4 from '../../../public/img-card-nivel4.png'
import img_nivel_5 from '../../../public/img-card-nivel5.png'
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
                          <Link className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card-nivel">
                      <img src={img_nivel_2}/>
                      <div>
                        <Link className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card-nivel">
                      <img src={img_nivel_3}/>  
                      <div>
                        <Link className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card-nivel">
                      <img src={img_nivel_4}/>  
                      <div>
                        <Link className="link-jogar">JOGAR</Link>
                      </div>
                  </div>

                  <div className="card-nivel">
                      <img src={img_nivel_5}/>  
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