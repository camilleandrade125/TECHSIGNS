import "./style.css"
import img_jogo_1 from '../../../public/fundo-card.png'
import img_tela_inicial from '../../../public/image-tela-inicial.png'
import { Link } from "react-router-dom"

function Menu(){
    return  (
            <main>
                <section className="sessao-info"> 
                    <div className="div-info">
                        <h4 className="sessao-info-subtitulo">SEJA BEM VINDO!</h4>
                        <h1 className="sessao-info-titulo">SOFTWARE EDUCATIVO ADAPTADO A LIBRAS</h1>
                        <hr />
                        <p className="sessao-info-texto">Conectando Mundos Silenciosos: Aprenda Informática de Forma Divertida com Nossos Jogos Inclusivos!</p>

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
                                    <Link to="/niveis_jogo1" className="link-niveis">VAMOS LÁ!</Link>
                            </div>

                        </div>

                        <div className="card">

                            <img src={img_jogo_1}/>
                            <span className="name-jogos">Jogo</span>
                            <div>
                            <Link to="/niveis_jogo2" className="link-niveis">VAMOS LÁ!</Link>
                            </div>
                            
                        </div>

                        <div className="card">
                           <img src={img_jogo_1}/>  
                            <span className="name-jogos">Jogo</span>
                            <div>
                            <Link to="/niveis_jogo3" className="link-niveis">VAMOS LÁ!</Link>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
    )
}

export default Menu