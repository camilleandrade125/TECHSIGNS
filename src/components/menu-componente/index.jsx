import "./style.css"

import img_jogo_1 from '../../../public/fundo (1).png'
import img_tela_inicial from '../../../public/image-tela-inicial.png'

function Menu(){
    return  (
            <main>
                <section className="sessao-info"> 
                    <div className="div-info">

                    </div>

                    <div>
                        <img className="image-tela-inicial"src={img_tela_inicial} alt="" />
                    </div>
                </section>
    


                <section className="section-button">
                    <div className="flex">
                        <div className="card">
                            <img src={img_jogo_1}/>
                            <span className="name-jogos">Jogo</span>
                            <div>
                                <button>PLAY</button>
                            </div>
                        </div>

                        <div className="card">
                            <img src={img_jogo_1}/>
                            <span className="name-jogos">Jogo</span>
                            <div className="button-jogos">
                                <button>PLAY</button>
                            </div>
                        </div>

                        <div className="card">
                           <img src={img_jogo_1}/>  
                            <span className="name-jogos">Jogo</span>
                            <div>
                                <button>PLAY</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Menu