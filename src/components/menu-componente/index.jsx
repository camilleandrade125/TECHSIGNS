import "./style.css"
import img_jogo_1 from '../../../public/imagemjogo1-tech.png'
import img_jogo_2 from '../../../public/imagemjogo2-tech.png'
import img_tela_inicial from '../../../public/image-tela-inicial.png'

import CardJogos from "../cards/card-jogos";


function Menu(){
    return  (
            <main>
                <section className="sessao-info"> 
                    <div className="div-info">
                        <h4 className="sessao-info-subtitulo">SEJA BEM VINDO!</h4>
                        <h1 className="sessao-info-titulo">TECHSIGNS: SOFTWARE EDUCATIVO ADAPTADO A LIBRAS</h1>
                        <hr />
                        <p className="sessao-info-texto">Conectando Mundos Silenciosos: Aprenda Informática de Forma Divertida com Nossos Jogos Inclusivos!</p>

                    </div>

                    <div>
                        <img className="image-tela-inicial"src={img_tela_inicial} alt="" />
                    </div>
                </section>

                <section className="section-button">
                    <CardJogos img={img_jogo_1} nome_jogos={'JOGO1'} link={'/niveis_jogo1'}/>
                    <CardJogos img={img_jogo_2} nome_jogos={'JOGO2'} link={'/niveis_jogo2'}/>
                    <CardJogos/>
                </section> 
            </main>
    )
}

export default Menu