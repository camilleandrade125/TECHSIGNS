import "./style.css"

// imports styled components global
import { Titulo } from '../../components/styled-components';
import { Paragrafo_info_jogo } from "../../components/styled-components";

function Niveis({nome_jogo, descriscao_jogo,imagem_descricao}){
    return(
        <>
         <main className="main">
          <section className="infomacoes-jogo-1">
          
            <div className="titulo-info">
            <Titulo>{nome_jogo}</Titulo>
            <Paragrafo_info_jogo >{descriscao_jogo}</Paragrafo_info_jogo>
            </div>

            <div className="img-jogo-nivel">
              <img src={imagem_descricao}/>
            </div>

          </section>
        
         </main>
        </>
    ) 
}

export default Niveis