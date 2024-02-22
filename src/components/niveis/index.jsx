import "./style.css"
function Niveis({nome_jogo, descriscao_jogo,imagem_descricao}){
    return(
        <>
         <main className="main">
          <section className="infomacoes-jogo-1">
          
            <div className="titulo-info">
            <h1 className="titulo-nome-jogo">{nome_jogo}</h1>
            <p className="info-jogo-1">{descriscao_jogo}</p>
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