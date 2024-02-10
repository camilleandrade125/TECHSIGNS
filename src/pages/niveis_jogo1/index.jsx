import CardNiveis from "../../components/cards/card-niveis"
import  Niveis  from "../../components/niveis"
import img_jogo_1 from "../../../public/img_info_jogos_1.png";
import  Botao_Voltar  from "../../components/botao-voltar"



export function NiveisPage(){

    return(
        <> 
        <Botao_Voltar link_voltar='/menu'/>
        <Niveis nome_jogo={'jogo 1'} 
        descriscao_jogo={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum labore voluptate magnam est cumque rem a officia! Animi obcaecati.'}
        imagem_descricao={img_jogo_1}/>
        <section className="card-flex">
          <CardNiveis nivel={1} link_1='/g1nivel1' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={2} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={3} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={4} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={5} link_1='' link_2='' link_3='' link_4='' link_5=''/>
        </section>
        </>
    )

}

export default NiveisPage

