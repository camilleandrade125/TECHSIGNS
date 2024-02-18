import "./style.css"
import {Link} from 'react-router-dom'
import img_jogo_1 from "../../../public/imagemjogo1-techsigns.png";
import img_jogo_2 from "../../../public/imagemjogo2-techsigns.png";
import img_jogo_3 from "../../../public/imagemjogo3-techsigns.png";
import img_tela_inicial from "../../../public/image-tela-inicial.png";
import CardJogos from "../../components/cards/card-jogos";
import { LuHeartHandshake } from "react-icons/lu";
import { TbPointFilled } from "react-icons/tb";
import { FaHands } from "react-icons/fa6";
//import { CgAlarm } from "react-icons/cg";
import A from "../../assets/Alfabetoemlibras/A.png";
import B from "../../assets/Alfabetoemlibras/B.png";
import C from "../../assets/Alfabetoemlibras/C.png";
import D from "../../assets/Alfabetoemlibras/D.png";

function MenuPage(){
    return  (
            <main className="main-menu">
                <section className="sessao-info"> 
                    <div className="div-info">
                        <h4 className="sessao-info-subtitulo">SEJA BEM VINDO!</h4>
                        <h1 className="sessao-info-titulo">TECHSIGNS: SOFTWARE EDUCATIVO ADAPTADO A LIBRAS</h1>
                        <hr />
                        <p className="sessao-info-texto">Conectando mundos silenciosos: Aprenda <span className="palavras-importantes">&lt;Informática&gt;</span> de forma divertida com nossos <span className="palavras-importantes">&lt;Jogos Inclusivos !&gt;</span> .</p>       
                    </div>

                    <div>
                        <img className="image-tela-inicial"src={img_tela_inicial} alt="" />
                    </div>
                </section>

                <section className="section-button-menu">
                    <div className="cards-button-menu">
                    <CardJogos img={img_jogo_1} nome_jogos={'SinMatch'} link={'/niveis_jogo1'}/>
                    <CardJogos img={img_jogo_2} nome_jogos={'SinaTech'} link={'/niveis_jogo2'}/>
                    <CardJogos img={img_jogo_3} nome_jogos={'SinaWay'} link={'/niveis_jogo3'}/>
                    </div>
                    <div className="alfabeto-libras">
                        <div className="pontos"><TbPointFilled/><TbPointFilled/><TbPointFilled/></div>
                        <div className="div-alfabeto"> 
                           <div className="alfabeto-menu"> <img src={A} alt=""/></div>
                           <div className="alfabeto-menu"> <img src={B} alt=""/></div>
                           <div className="alfabeto-menu"> <img src={C} alt=""/></div>
                           <div className="alfabeto-menu"> <img src={D} alt=""/></div>
                          


                        </div>
                        <Link className="alfabeto-botao">ALFABETO EM LIBRAS <LuHeartHandshake fontSize={15}/></Link>
                    </div>
                </section> 
            </main>
    )
}

export default MenuPage