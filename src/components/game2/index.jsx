import "./style.css"
import IArquivo from "../../assets/ImagensComponentes/Arquivos.png"
import IBackup from "../../assets/ImagensComponentes/Backup.png"
import IBancodedados from "../../assets/ImagensComponentes/Banco de dados.png"
import IBinario from "../../assets/ImagensComponentes/Binario.png"
import Larquivo from "../../assets/Datilologia/Arquivos.png"
import LBackup from "../../assets/Datilologia/Backup.png"
import LBancodedados from "../../assets/Datilologia/Banco de dados.png"
import LBinario from "../../assets/Datilologia/Binario.png"

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
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      </div>
    </>
  )
}

export default Telajogo2