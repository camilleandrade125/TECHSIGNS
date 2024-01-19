import "./style.css"
import Arquivo from "../../assets/Videos/Arquivos.mp4"
import IArquivo from "../../assets/ImagensComponentes/Arquivos.png"
import IBackup from "../../assets/ImagensComponentes/Backup.png"
import IBancodedados from "../../assets/ImagensComponentes/Banco de dados.png"
import IBinario from "../../assets/ImagensComponentes/Binario.png"


function Telajogo1(){
    return (
        <>
    
            <button className="Pausebutton"></button>
            <label className="cronometro">00:00:00</label>
            
            <main className="telgame">    

            <video src={Arquivo} controls ></video>

            <div className="Grade-Buttons">
                <button><img src={IArquivo}></img></button>
                <button><img src={IBackup}></img></button>
                <button><img src={IBancodedados}></img></button>
                <button><img src={IBinario}></img></button>
            </div>
            </main>
        </>

    )
}

export default Telajogo1