import "./style.css"
function Niveis({nome_jogo, descriscao_jogo,imagem_descricao}){
    return(
        <>
         <main>
          <section className="infomacoes-jogo-1">
          
          <div className="titulo-nome-jogo">
            <h1>{nome_jogo}</h1>
          </div>

          <div className="flex-nivel">
            <div className="info-jogo-1">
              <p>{descriscao_jogo}</p>
            </div>

            <div className="img-jogo-nivel">
              <img src={imagem_descricao}/>

            </div>
          </div>
          </section>
        
         </main>
        </>
    ) 
}

export default Niveis