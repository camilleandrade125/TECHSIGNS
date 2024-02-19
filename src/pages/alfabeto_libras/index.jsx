import "./style.css"
import  Botao_Voltar  from "../../components/botao-voltar"
import A from "../../assets/Alfabetoemlibras/A.png";
import B from "../../assets/Alfabetoemlibras/B.png";
import C from "../../assets/Alfabetoemlibras/C.png";
import Ccedil from "../../assets/Alfabetoemlibras/Ccedil.png";
import D from "../../assets/Alfabetoemlibras/D.png";
import E from "../../assets/Alfabetoemlibras/E.png";
import F from "../../assets/Alfabetoemlibras/F.png";
import G from "../../assets/Alfabetoemlibras/G.png";
import H from "../../assets/Alfabetoemlibras/H.png";
import I from "../../assets/Alfabetoemlibras/I.png";
import J from "../../assets/Alfabetoemlibras/J.png";
import K from "../../assets/Alfabetoemlibras/K.png";
import L from "../../assets/Alfabetoemlibras/L.png";
import M from "../../assets/Alfabetoemlibras/M.png";
import N from "../../assets/Alfabetoemlibras/N.png";
import O from "../../assets/Alfabetoemlibras/O.png";
import P from "../../assets/Alfabetoemlibras/P.png";
import Q from "../../assets/Alfabetoemlibras/Q.png";
import R from "../../assets/Alfabetoemlibras/R.png";
import S from "../../assets/Alfabetoemlibras/S.png";
import T from "../../assets/Alfabetoemlibras/T.png";
import U from "../../assets/Alfabetoemlibras/U.png";
import V from "../../assets/Alfabetoemlibras/V.png";
import W from "../../assets/Alfabetoemlibras/W.png";
import X from "../../assets/Alfabetoemlibras/X.png";
import Y from "../../assets/Alfabetoemlibras/Y.png";
import Z from "../../assets/Alfabetoemlibras/Z.png";

function Alfabetopage(){

    return(
        <>
        <Botao_Voltar link_voltar='/menu'/>
        <main className="alfabeto">
            <h1 className="titulo-alfabeto"> ALFABETO EM LIBRAS</h1>
            <section className="section-alfabeto">
            <div className="card-alfabeto"> <img src={A} alt=""/></div>
            <div className="card-alfabeto"> <img src={B} alt=""/></div>
            <div className="card-alfabeto"> <img src={C} alt=""/></div>
            <div className="card-alfabeto"> <img src={Ccedil} alt=""/></div>
            <div className="card-alfabeto"> <img src={D} alt=""/></div>
            <div className="card-alfabeto"> <img src={E} alt=""/></div>
            <div className="card-alfabeto"> <img src={F} alt=""/></div>
            <div className="card-alfabeto"> <img src={G} alt=""/></div>
            <div className="card-alfabeto"> <img src={H} alt=""/></div>
            <div className="card-alfabeto"> <img src={I} alt=""/></div>
            <div className="card-alfabeto"> <img src={J} alt=""/></div>
            <div className="card-alfabeto"> <img src={K} alt=""/></div>
            <div className="card-alfabeto"> <img src={L} alt=""/></div>
            <div className="card-alfabeto"> <img src={M} alt=""/></div>
            <div className="card-alfabeto"> <img src={N} alt=""/></div>
            <div className="card-alfabeto"> <img src={O} alt=""/></div>
            <div className="card-alfabeto"> <img src={P} alt=""/></div>
            <div className="card-alfabeto"> <img src={Q} alt=""/></div>
            <div className="card-alfabeto"> <img src={R} alt=""/></div>
            <div className="card-alfabeto"> <img src={S} alt=""/></div>
            <div className="card-alfabeto"> <img src={T} alt=""/></div>
            <div className="card-alfabeto"> <img src={U} alt=""/></div>
            <div className="card-alfabeto"> <img src={W} alt=""/></div>
            <div className="card-alfabeto"> <img src={Y} alt=""/></div>
            <div className="card-alfabeto"> <img src={Z} alt=""/></div>
           </section>
        </main>
        </>
    )
}

export default Alfabetopage