import "./style.css"
import CardNiveis from "../cards/card-niveis";

function Niveis(){
    return(
        <>
         <main>
          <section className="infomacoes-jogo-1">
          <div className="titulo-jogo-1">
            <h1>Jogo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptates, maiores tenetur sit, asperiores esse obcaecati excepturi, ab animi officiis nisi impedit? At sed repellendus tempora illum velit aperiam ut!</p>
          </div>

          <div className="testee">

          </div>
          </section>
          <section className="card-flex">
          <CardNiveis nivel={1} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={2} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={3} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={4} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          <CardNiveis nivel={5} link_1='' link_2='' link_3='' link_4='' link_5=''/>
          </section>
         </main>
        </>
    ) 
}

export default Niveis