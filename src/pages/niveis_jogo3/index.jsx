import CardNiveis from "../../components/cards/card-niveis"
import  Niveis  from "../../components/niveis"
import img_jogo_3 from "../../../public/info-jogo3.png";
import  Botao_Voltar  from "../../components/botao-voltar"



export function NiveisPage3(){

    return(
        <>  
        <Botao_Voltar link_voltar='/menu'/>
        <Niveis nome_jogo={'WordWay'} 
        descriscao_jogo={'No jogo "Wordway", os jogadores enfrentam o desafio de colidir com os sinais corretos para formar palavras. Cada nível apresenta uma palavra a ser construída, exigindo destreza e raciocínio. Com gráficos envolventes.'}
        imagem_descricao={img_jogo_3}/>
        <section className="card-flex">
          <CardNiveis nivel={1} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={2} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={3} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={4} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={5} link_1='' link_2='' link_3='' link_4='' link_5=''/>
        </section>
        </>
    )

}

export default NiveisPage3