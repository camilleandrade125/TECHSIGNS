import React, { useState, useEffect } from "react";
import "./style.css";
import IArquivo from "../../assets/ImagensComponentes/Arquivos.png";
import IBackup from "../../assets/ImagensComponentes/Backup.png";
import IBancodedados from "../../assets/ImagensComponentes/Banco de dados.png";
import IBinario from "../../assets/ImagensComponentes/Binario.png";
import Larquivo from "../../assets/Datilologia/Arquivos.png";
import LBackup from "../../assets/Datilologia/Backup.png";
import LBancodedados from "../../assets/Datilologia/Banco de dados.png";
import LBinario from "../../assets/Datilologia/Binario.png";

function Telajogo2() {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [round, setRound] = useState(1);
  const [timer, setTimer] = useState(60);
  const [paused, setPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleButtonClick = (button) => {
    if (selectedButtons.length < 2) {
      setSelectedButtons([...selectedButtons, button]);
    }
  };

  const handleRestart = () => {
    setGameOver(false);
    setRound(1);
    setTimer(60);
    setPaused(false);
    setSelectedButtons([]);
  };

  const handleResume = () => {
    setPaused(false);
  };

  const handleReset = () => {
    setRound(1);
    setTimer(60);
    setSelectedButtons([]);
    setPaused(false);
  };

  useEffect(() => {
    if (!paused && !gameOver) {
      const interval = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          setGameOver(true);
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [paused, timer, gameOver]);

  return (
    <>
      {gameOver ? (
        <div className="fim-game">
          <p>Pontuação por acertos:{ }</p>
          <p>Pontuação por Erros: { }</p>
          <p>Tempo restante de jogo: 0s</p>
          <p>Pontuação final: {}</p>
          <button className="fim" onClick={handleRestart}>
            Reiniciar
          </button>
          <button className="fim">Sair</button>
        </div>
      ) : paused ? (
        <div className="Pause-state">
          <button className="fim" onClick={handleResume}>
            Retornar
          </button>
          <button className="fim" onClick={handleReset}>
            Reiniciar
          </button>
          <button className="fim">Sair</button>
        </div>
      ) : (
        <>
          <div className="container-top">
            <button className="pause-button" onClick={() => setPaused(!paused)}>
              {paused ? "▶" : "||"}
            </button>
            <div className="top-message">Rodada {round}</div>
            <div className="Tempo">{timer}s</div>
          </div>

          <div className="Buttons-TI">
        <button onClick={() => handleButtonClick("TI-Arquivo")}>
          <img src={IArquivo} alt="Arquivo"></img>
        </button>
        <button onClick={() => handleButtonClick("TI-Backup")}>
          <img src={IBackup} alt="Backup"></img>
        </button>
        <button onClick={() => handleButtonClick("TI-Bancodedados")}>
          <img src={IBancodedados} alt="Banco de Dados"></img>
        </button>
        <button onClick={() => handleButtonClick("TI-Binario")}>
          <img src={IBinario} alt="Binario"></img>
        </button>
      </div>

      <div className="Buttons-Libras">
        <button onClick={() => handleButtonClick("Libras-Bancodedados")}>
          <img src={LBancodedados} width="190px" alt="Banco de Dados"></img>
        </button>
        <button onClick={() => handleButtonClick("Libras-Binario")}>
          <img src={LBinario} width="190px" alt="Binario"></img>
        </button>
        <button onClick={() => handleButtonClick("Libras-Backup")}>
          <img src={LBackup} width="190px" alt="Backup"></img>
        </button>
        <button onClick={() => handleButtonClick("Libras-Arquivo")}>
          <img src={Larquivo} width="190px" alt="Arquivo"></img>
        </button>
      </div>
        </>
      )}
    </>
  );
}

export default Telajogo2;