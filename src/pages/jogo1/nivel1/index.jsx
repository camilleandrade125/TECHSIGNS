import "./style.css"

function Jogo1(){
    return (
        <>
            <div className="Superior">
                <button class="square-button">Voltar</button>
                <label>00:00:00</label>
            </div>    

            <div className="Area-video">
                <video src="seu_video.mp4" width="428" height="475"></video>
            </div>    


            <div className="Grade-Buttons">
                <button>Botão 1</button>
                <button>Botão 2</button>
                <button>Botão 3</button>
                <button>Botão 4</button>
            </div>
        </>

    )
}

export default Jogo1