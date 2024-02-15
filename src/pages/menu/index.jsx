import "./style.css"
import img_jogo_1 from "../../../public/imagemjogo1-tech.png";
import img_jogo_2 from "../../../public/imagemjogo2-tech.png";
import img_tela_inicial from "../../../public/image-tela-inicial.png";
import CardJogos from "../../components/cards/card-jogos";

//import { CgAlarm } from "react-icons/cg";

function MenuPage(){
    return  (
            <main>
                <section className="sessao-info"> 
                    <div className="div-info">
                        <h4 className="sessao-info-subtitulo">SEJA BEM VINDO!</h4>
                        <h1 className="sessao-info-titulo">TECHSIGNS: SOFTWARE EDUCATIVO ADAPTADO A LIBRAS</h1>
                        <hr />
                        <p className="sessao-info-texto">Conectando mundos ilenciosos: Aprenda <span className="palavras-importantes">&lt;Informática&gt;</span> de forma divertida com nossos <span className="palavras-importantes">&lt;Jogos Inclusivos!&gt;</span></p>       
                    </div>

                    <div>
                        <img className="image-tela-inicial"src={img_tela_inicial} alt="" />
                    </div>
                </section>

                <section className="section-button">
                    <CardJogos img={img_jogo_1} nome_jogos={'SinMatch'} link={'/niveis_jogo1'}/>
                    <CardJogos img={img_jogo_2} nome_jogos={'SinaTech'} link={'/niveis_jogo2'}/>
                    <CardJogos img={''} nome_jogos={''} link={'/niveis_jogo3'}/>
                </section> 
            </main>
    )
}

export default MenuPage