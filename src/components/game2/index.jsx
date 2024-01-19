import "./style.css"
import IArquivo from "../../assets/ImagensComponentes/Arquivos.png"
import IBackup from "../../assets/ImagensComponentes/Backup.png"
import IBancodedados from "../../assets/ImagensComponentes/Banco de dados.png"
import IBinario from "../../assets/ImagensComponentes/Binario.png"

function  Telajogo2() {
  return (
    <>
      
	<button className="Pausebutton"></button>
  <label className="cronometro">00:00:00</label>
  

      <div className="Buttons-TI">
      <button><img src={IArquivo}></img></button>
      <button><img src={IBackup}></img></button>
      <button><img src={IBancodedados}></img></button>
      <button><img src={IBinario}></img></button>
      </div>

      <div className="Buttons-Libras">
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
      </div>
    </>
  )
}

export default Telajogo2