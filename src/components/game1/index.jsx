import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Arquivo from "../../assets/Videos/Arquivos.mp4";
import Binario from "../../assets/Videos/Binario.mp4";
import IArquivo from "../../assets/ImagensComponentes/Arquivos.png";
import IBackup from "../../assets/ImagensComponentes/Backup.png";
import IBancodedados from "../../assets/ImagensComponentes/Banco de dados.png";
import IBinario from "../../assets/ImagensComponentes/Binario.png";

function Telajogo1() {
  const [timer, setTimer] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [scores, setScores] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [message, setMessage] = useState("");
  const [showRoundMessage, setShowRoundMessage] = useState(false);
  const [showTopMessage, setShowTopMessage] = useState(true);
  const [topMessage, setTopMessage] = useState(`Rodada ${currentRound}`);
  const [roundEndTime, setRoundEndTime] = useState(null);
  const [tempoRestante, setTempoRestante] = useState(0);
  const videoRef = useRef(null);
  const [buttons, setButtons] = useState([
    { id: 1, image: IArquivo },
    { id: 2, image: IBackup },
    { id: 3, image: IBancodedados },
    { id: 4, image: IBinario },
  ]);

  useEffect(() => {
    let timerId;

    if (!isPaused && timer > 0) {
      timerId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (!isPaused && !gameOver) {
      setGameOver(true);
      setRoundEndTime(Date.now());
      setTempoRestante(timer);
    }

    return () => clearTimeout(timerId);
  }, [timer, isPaused, gameOver]);

  useEffect(() => {
    if (roundEndTime) {
      const timeoutId = setTimeout(() => {
        setShowRoundMessage(false);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [roundEndTime]);

  const handlePause = () => {
    setIsPaused(!isPaused);

    if (videoRef.current) {
      if (!isPaused) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleResume = () => {
    setIsPaused(false);

    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleReset = () => {
    setIsPaused(false);
    setTimer(60);
    setCurrentRound(1);
    setScores(0);
    setErrorCount(0);
    setMessage("");
    setShowRoundMessage(false);
    setShowTopMessage(true);
    setTopMessage(`Rodada 1`);
    shuffleButtons();

    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleButtonClick = (clickedButtonId) => {
    // Se o jogo estiver pausado, não processar o clique do botão
    if (isPaused) {
      return;
    }

    // Restante do código permanece o mesmo...
    // Verifica se o botão clicado é o correto para a rodada atual
    const isCorrectButton =
      (currentRound === 1 && clickedButtonId === 1) ||
      (currentRound === 2 && clickedButtonId === 4);

    // Atualiza a pontuação com base na corretude do botão
    if (isCorrectButton) {
      setScores((prevScores) => prevScores + 10);
    } else {
      // Se o botão clicado for errado, subtrai 5 pontos e incrementa o contador de erros
      setScores((prevScores) => Math.max(0, prevScores - 5)); // Não permite pontuação negativa
      setErrorCount((prevErrorCount) => prevErrorCount + 1);
    }

    setShowRoundMessage(true);

    if (currentRound === 2 && isCorrectButton) {
      // Finaliza a rodada 2
      setGameOver(true);
      setRoundEndTime(Date.now());
      setTempoRestante(timer);
    } else {
      // Avança para a próxima rodada se o botão clicado for correto
      if (isCorrectButton) {
        setCurrentRound((prevRound) => prevRound + 1);
        setTopMessage(`Rodada ${currentRound + 1}`);
      }

      // Embaralha os botões para a próxima rodada
      shuffleButtons();
    }
  };

  const handleRestart = () => {
    setGameOver(false);
    setTimer(60);
    setCurrentRound(1);
    setScores(0);
    setErrorCount(0);
    setMessage("");
    setShowRoundMessage(false);
    setShowTopMessage(true);
    setTopMessage("Rodada 1");
    shuffleButtons();

    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const shuffleButtons = () => {
    setButtons((prevButtons) => [...prevButtons].sort(() => Math.random() - 0.5));
  };

  return (
    <>
      {gameOver ? (
        <div className="fim-game">
          <p>Pontuação por acertos: {scores}</p>
          <p>Pontuação por Erros: {errorCount * -5}</p>
          <p>Tempo restante de jogo: {tempoRestante}s</p>
          <p>Pontuação final: {calculateFinalScore()}</p>
          <p>{message}</p>
          <button className="fim" onClick={handleRestart}>
            Reiniciar
          </button>
          <button className="fim">Sair</button>
        </div>
      ) : (
        <div className="Fase1">
          <main className="telgame">
            {isPaused && (
              <div className="pause-state">
                <button className="fim" onClick={handleResume}>
                  Retornar
                </button>
                <button className="fim" onClick={handleReset}>
                  Reiniciar
                </button>
                <button className="fim">Sair</button>
              </div>
            )}
            <div className="container-top">
                
                <button className="Pausebutton" onClick={handlePause}>||</button>
                
                <div className="top-message">{topMessage}</div>
                
                <div className="Tempo">{timer}s</div>
                
            </div>



            <div className="container-center">
              <video ref={videoRef} src={currentRound === 1 ? Arquivo : Binario} autoPlay muted loop></video>
            </div>


            
            <div className="Grade-Buttons">
              {buttons.map((button) => (
                <button key={button.id} onClick={() => handleButtonClick(button.id)}>
                  <img src={button.image} alt={`Botão ${button.id}`} />
                </button>
              ))}
              
            </div>
          </main>
        </div>
      )}
    </>
  );

  function calculateFinalScore() {
    const timeRemainingBonus =
      scores > 0 ? tempoRestante * scores - errorCount * 5 : 0;
    return timeRemainingBonus;
  }
}

export default Telajogo1;
