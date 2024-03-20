
import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import shuffle from "lodash/shuffle";
import IArquivo from "../../assets/ImagensComponentes/Arquivos.png";
import IBackup from "../../assets/ImagensComponentes/Backup.png";
import IBancodedados from "../../assets/ImagensComponentes/Banco de dados.png";
import IBinario from "../../assets/ImagensComponentes/Binario.png";
import Larquivo from "../../assets/Datilologia/Arquivos.png";
import LBackup from "../../assets/Datilologia/Backup.png";
import LBancodedados from "../../assets/Datilologia/Banco_de_dados.png";
import LBinario from "../../assets/Datilologia/Binario.png";
import { TbPlayerPause } from "react-icons/tb";
import { LuAlarmClock } from "react-icons/lu";

function Telajogo2() {
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [hits, setHits] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [buttonTIDisabled, setButtonTIDisabled] = useState(false);
  const [buttonLibrasDisabled, setButtonLibrasDisabled] = useState(false);
  const [buttonTI, setButtonTI] = useState([
    { id: 1, image: IArquivo, selected: false, matched: false },
    { id: 2, image: IBackup, selected: false, matched: false },
    { id: 3, image: IBancodedados, selected: false, matched: false },
    { id: 4, image: IBinario, selected: false, matched: false },
  ]);
  const [buttonLibras, setButtonLibras] = useState([
    { id: 3, image: LBancodedados, selected: false, matched: false },
    { id: 4, image: LBinario, selected: false, matched: false },
    { id: 2, image: LBackup, selected: false, matched: false },
    { id: 1, image: Larquivo, selected: false, matched: false },
  ]);

  const [selectedButtonTI, setSelectedButtonTI] = useState(null);
  const [selectedButtonLibras, setSelectedButtonLibras] = useState(null);

  const timerRef = useRef(null);

  useEffect(() => {
    if (!paused && !gameOver) {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [paused, gameOver]);

  useEffect(() => {
    if (timer === 0) {
      setGameOver(true);
    }
  }, [timer]);

  const shuffleButtons = () => {
    setButtonTI(shuffle([...buttonTI]));
    setButtonLibras(shuffle([...buttonLibras]));
  };

  const checkAllPairsFound = () => {
    return matchedPairs === 3;
  };

  const handleButtonTIClick = (button) => {
    if (!selectedButtonTI) {
      setSelectedButtonTI(button);
      setButtonTI((prevButtons) =>
        prevButtons.map((btn) =>
          btn.id === button.id ? { ...btn, selected: true } : btn
        )
      );
    }
  };

  const handleButtonLibrasClick = (button) => {
    if (!selectedButtonLibras && selectedButtonTI) {
      setSelectedButtonLibras(button);
      setButtonLibras((prevButtons) =>
        prevButtons.map((btn) =>
          btn.id === button.id ? { ...btn, selected: true } : btn
        )
      );

      if (selectedButtonTI.id === button.id) {
        setButtonTI((prevButtons) =>
          prevButtons.map((btn) =>
            btn.id === selectedButtonTI.id ? { ...btn, matched: true } : btn
          )
        );

        setButtonLibras((prevButtons) =>
          prevButtons.map((btn) =>
            btn.id === button.id ? { ...btn, matched: true } : btn
          )
        );

        setSelectedButtonTI(null);
        setSelectedButtonLibras(null);

        setScore((prevScore) => prevScore + 1);

        setMatchedPairs((prevMatchedPairs) => prevMatchedPairs + 1);

        if (checkAllPairsFound()) {
          setGameOver(true);
        }
      } else {
        setErrors((prevErrors) => prevErrors + 1);

        setTimeout(() => {
          setButtonTI((prevButtons) =>
            prevButtons.map((btn) =>
              btn.id === selectedButtonTI.id
                ? { ...btn, selected: false }
                : btn
            )
          );

          setButtonLibras((prevButtons) =>
            prevButtons.map((btn) =>
              btn.id === button.id ? { ...btn, selected: false } : btn
            )
          );

          setSelectedButtonTI(null);
          setSelectedButtonLibras(null);
        }, 1000);

        if (errors === 2) {
          setGameOver(true);
        }
        
      }
    }
  };

  const handleRestart = () => {
    setGameOver(false);
    setPaused(false);
    setTimer(60);
    setScore(0);
    setErrors(0);
    setHits(0);
    setSelectedButtonTI(null);
    setSelectedButtonLibras(null);
    setMatchedPairs(0);
    setButtonTIDisabled(true);
    setButtonTI((prevButtons) =>
      prevButtons.map((btn) => ({
        ...btn,
        selected: false,
        matched: false,
      }))
    );
    setButtonLibras((prevButtons) =>
      prevButtons.map((btn) => ({
        ...btn,
        selected: false,
        matched: false,
      }))
    );
    shuffleButtons();
    setTimeout(() => {
      setButtonTIDisabled(false);
      setButtonLibrasDisabled(false);
    }, 1000);
    window.location.reload();
  };
  

  const handleResume = () => {
  setPaused(false);
  };

  const handleVoltar = () => {
    window.location.reload()
    window.location.href = "/niveis_jogo1";
  };


  return (
    <>
      {gameOver ? (
        <div className="fim-game">
          <p>Pontuação por acertos: {score}</p>
          <p>Tempo restante de jogo: {timer}s</p>
          <p>Jogadas erradas: {errors}</p>
          <p>Pontuação final: {calculateFinalScore()}</p>
          <button className="fim" onClick={handleRestart}>
            Reiniciar
          </button>
          <button className="fim" onClick={handleVoltar}>
            Sair
          </button>     
        </div>
      ) : paused ? (
        <div className="pause-state">
          <button className="fim" onClick={handleResume}>
            Retornar
          </button>
          <button className="fim" onClick={handleRestart}>
            Reiniciar
          </button>
          <button className="fim" onClick={handleVoltar}>
            Sair
          </button> 
        </div>
      ) : (
        <>
          <div className="container-top2">
            <button
              className="pause-button estilo-botao-global"
              onClick={() => setPaused(!paused)}
            >
              {paused ? "▶" : <TbPlayerPause fontSize={25}/>}
            </button>
            <div className="Tempo"><LuAlarmClock fontSize={25}/> {timer}s</div>
          </div>

          <div className="btn-TI">
            {buttonTI.map((button) => (
              <button
                key={button.id}
                onClick={() => handleButtonTIClick(button)}
                disabled={buttonTIDisabled}
                style={{
                  border: button.selected ? "5px solid green" : "none",
                  pointerEvents: button.selected ? "none" : "auto",
                  opacity: button.matched ? 0 : 1,
                  display: button.matched ? "none" : "block",
                }}
              >
                {button.matched ? null : (
                  <img src={button.image} width="190px" alt={`TI-${button.id}`} />
                )}
              </button>
            ))}
          </div>

          <div className="btn-Libras">
            {buttonLibras.map((button) => (
              <button
                key={button.id}
                onClick={() => handleButtonLibrasClick(button)}
                disabled={buttonLibrasDisabled}
                style={{
                  border: button.selected ? "5px solid black" : "none",
                  pointerEvents: button.selected ? "none" : "auto",
                  opacity: button.matched ? 0 : 1,
                  display: button.matched ? "none" : "block",
                }}
              >
                {button.matched ? null : (
                  <img src={button.image} width="190px" alt={`Libras-${button.id}`} />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
  function calculateFinalScore() {
    const timeRemainingBonus =
    score > 0 ? timer * score - errors : 0;
    return timeRemainingBonus;
  }
}

export default Telajogo2;
