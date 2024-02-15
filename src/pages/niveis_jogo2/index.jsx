import Niveis from "../../components/niveis"
import CardNiveis from "../../components/cards/card-niveis"
import img_jogo_2 from "../../../public/info-jogo2.png";
import  Botao_Voltar  from "../../components/botao-voltar"

export function NiveisPage2(){

    return(
        <> 
            <Botao_Voltar link_voltar='/menu'/>
            <Niveis nome_jogo={'SinaTech'} 
        descriscao_jogo={'No jogo "SinaTech", os jogadores exploram a datilologia Libras ao decifrar os gestos de uma intérprete. O desafio consiste em interpretar seus movimentos precisos, escolhendo corretamente entre as cartas que representam diferentes sinais.'}
            imagem_descricao={img_jogo_2}/>
            
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

export default NiveisPage2