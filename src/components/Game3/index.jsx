import React, { useState, useEffect } from 'react';
import './style.css';
import PlayerImage from '../../assets/ifJogador.png';
import A from "../../assets/Alfabetoemlibras/A.png";
import B from "../../assets/Alfabetoemlibras/B.png";
import C from "../../assets/Alfabetoemlibras/C.png";
import Ccedil from "../../assets/Alfabetoemlibras/Ccedil.png";
import D from "../../assets/Alfabetoemlibras/D.png";
import E from "../../assets/Alfabetoemlibras/E.png";
import F from "../../assets/Alfabetoemlibras/F.png";
import G from "../../assets/Alfabetoemlibras/G.png";
import H from "../../assets/Alfabetoemlibras/H.png";
import I from "../../assets/Alfabetoemlibras/I.png";
import J from "../../assets/Alfabetoemlibras/J.png";
import K from "../../assets/Alfabetoemlibras/K.png";
import L from "../../assets/Alfabetoemlibras/L.png";
import M from "../../assets/Alfabetoemlibras/M.png";
import N from "../../assets/Alfabetoemlibras/N.png";
import O from "../../assets/Alfabetoemlibras/O.png";
import P from "../../assets/Alfabetoemlibras/P.png";
import Q from "../../assets/Alfabetoemlibras/Q.png";
import R from "../../assets/Alfabetoemlibras/R.png";
import S from "../../assets/Alfabetoemlibras/S.png";
import T from "../../assets/Alfabetoemlibras/T.png";
import U from "../../assets/Alfabetoemlibras/U.png";
import V from "../../assets/Alfabetoemlibras/V.png";
import W from "../../assets/Alfabetoemlibras/W.png";
import X from "../../assets/Alfabetoemlibras/X.png";
import Y from "../../assets/Alfabetoemlibras/Y.png";
import Z from "../../assets/Alfabetoemlibras/Z.png";
import Monitor from "../../assets/monitor.png"
import { TbPlayerPause } from "react-icons/tb";

function Telajogo3(){
  const [containerWidth, setContainerWidth] = useState(1000);
  const [playerPosition, setPlayerPosition] = useState({ x: 500, y: 500 });
  const [playerDirection, setPlayerDirection] = useState('right');
  const [fallingLetter, setFallingLetter] = useState(null);
  const [collidedLetters, setCollidedLetters] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [wordColor, setWordColor] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [maxLetters, setMaxLetters] = useState(7);
  const [isPaused, setIsPaused] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [incorrectCollisions, setIncorrectCollisions] = useState(0);
  const [correctCollisions, setCorrectCollisions] = useState(0);
  const [analiseFinal, setAnaliseFinal] = useState('');
  const [areAllLettersGreen, setAreAllLettersGreen] = useState(false);
  const [eficiencia, setEficiencia] = useState(0);
  const validXPositions = [ 280, 350, 450, 550, 650, 750, 850, 900, ];
  const alphabetImages = [
    { id: 'A', src: A },
    { id: 'B', src: B },
    { id: 'C', src: C },
    { id: 'Ç', src: Ccedil },
    { id: 'D', src: D },
    { id: 'E', src: E },
    { id: 'F', src: F },
    { id: 'G', src: G },
    { id: 'H', src: H },
    { id: 'I', src: I },
    { id: 'J', src: J },
    { id: 'K', src: K },
    { id: 'L', src: L },
    { id: 'M', src: M },
    { id: 'N', src: N },
    { id: 'O', src: O },
    { id: 'P', src: P },
    { id: 'Q', src: Q },
    { id: 'R', src: R },
    { id: 'S', src: S },
    { id: 'T', src: T },
    { id: 'U', src: U },
    { id: 'V', src: V },
    { id: 'W', src: W },
    { id: 'X', src: X },
    { id: 'Y', src: Y },
    { id: 'Z', src: Z },
  ];

  const desiredWords = ["MONITOR"];

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameOver) {
        switch (e.key) {
          case 'ArrowLeft':
            setPlayerPosition((prev) => ({ ...prev, x: Math.max(prev.x - 15, 210) }));
            setPlayerDirection('left');
            break;
          case 'ArrowRight':
            setPlayerPosition((prev) => ({ ...prev, x: Math.min(prev.x + 15, containerWidth - -400) }));
            setPlayerDirection('right');
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [containerWidth, gameOver]);

  useEffect(() => {
    if (!gameOver && !fallingLetter && !isPaused) {
      const newLetter = generateRandomLetter();
      const randomXPosition = validXPositions[Math.floor(Math.random() * validXPositions.length)];
      const maxXPosition = containerWidth - 15 - 35;
      const adjustedXPosition = Math.min(randomXPosition, maxXPosition);

      setFallingLetter({ ...newLetter, x: adjustedXPosition, y: 50 });
    }
  }, [gameOver, fallingLetter, playerPosition, containerWidth, collidedLetters, maxLetters, isPaused]);

  useEffect(() => {
    if (!gameOver) {
      const collectedWord = collidedLetters.join('');
      setCurrentWord(collectedWord);
      checkWord();
    }
  }, [collidedLetters, gameOver, maxLetters]);

  useEffect(() => {
    if (!gameOver) {
      const updateFallingLetter = () => {
        if (fallingLetter && !isPaused) {
          setFallingLetter((prev) => ({ ...prev, y: prev.y + 5 }));
        }
      };

      const intervalId = setInterval(() => {
        updateFallingLetter();
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [fallingLetter, gameOver, isPaused]);

  useEffect(() => {
    if (!gameOver) {
      const checkCollisions = () => {
        const playerTop = playerPosition.y - 30;
        const playerBottom = playerTop + 100;
  
        if (fallingLetter) {
          const letterTop = fallingLetter.y;
          const letterBottom = letterTop + 35;
          const letterLeft = fallingLetter.x;
          const letterRight = letterLeft + 10;
  
          const isCollidingWithPlayer = letterBottom >= playerTop && letterTop <= playerBottom;
          const isCollidingWithPlayerSides = letterRight >= playerPosition.x && letterLeft <= playerPosition.x + 150;
  
          if (isCollidingWithPlayer && isCollidingWithPlayerSides) {
            if (desiredWords[0].includes(fallingLetter.id)) {
              if (!collidedLetters.includes(fallingLetter.id)) {
                // Se a letra ainda não foi considerada correta, então contabiliza a colisão correta
                setCorrectCollisions((prev) => prev + 1);
                setCollidedLetters((prev) => [...prev, fallingLetter.id]);
                setWordColor((prev) => ({ ...prev, [fallingLetter.id]: 'green' }));
              }
            } else {
              setIncorrectCollisions((prev) => prev + 1);
            }
  
            setFallingLetter(null);
          } else if (fallingLetter.y >= 520) {
            setFallingLetter(null);
          }
        }
      };
  
      checkCollisions();
    }
  }, [fallingLetter, gameOver, playerPosition, collidedLetters, correctCollisions, incorrectCollisions]);
  
  

  useEffect(() => {
    if (!gameOver && (correctCollisions === desiredWords[0].length || incorrectCollisions === 3)) {
      setGameOver(true);
      setIsGameOver(true);
    }
  }, [correctCollisions, incorrectCollisions, gameOver]);

  const generateRandomLetter = () => {
    const randomIndex = Math.floor(Math.random() * alphabetImages.length);
    return alphabetImages[randomIndex];
  };
  
  useEffect(() => {
    if (desiredWords[0].split('').every(letter => wordColor[letter] === 'green')) {
      setAreAllLettersGreen(true);
      setGameOver(true);
      setIsGameOver(true);
    } else {
      setAreAllLettersGreen(false);
    }
  }, [wordColor]);

  const checkWord = () => {
    if (desiredWords.includes(currentWord)) {
      setGameOver(true);
    }
  };

  useEffect(() => {
    if (isPaused) {
    }
  }, [isPaused]);

  useEffect(() => {
    if (isGameOver) {
      let efficiency = 100;

      if (incorrectCollisions === 3) {
        efficiency = 0;
        setAnaliseFinal('Precisa melhorar');
      } else if (currentWord == desiredWords[0] && incorrectCollisions === 2) {
        efficiency = 60;
        setAnaliseFinal('Regular');
      } else if (currentWord == desiredWords[0] && incorrectCollisions === 1) {
        efficiency = 80;
        setAnaliseFinal('Bom');
      } else if (currentWord == desiredWords[0] && incorrectCollisions === 0) {
        efficiency = 100;
        setAnaliseFinal('Excelente');
      }

      setEficiencia(efficiency);
    }
  }, [isGameOver, currentWord, incorrectCollisions]);

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsPaused(false);
    setFallingLetter(null);
    setCollidedLetters([]);
    setCurrentWord('');
    setWordColor({});
    setGameOver(false);
    setMaxLetters(7);
    setIsGameOver(false);
    setIncorrectCollisions(0);
    setCorrectCollisions(0);
    setAnaliseFinal('');
    setEficiencia(0);
    setPlayerPosition({ x: 500, y: 500 }); // Reset player position if needed
  };
  

  const handleVoltar = () => {
    window.location.reload()
    window.location.href = "/niveis_jogo3";
  };

  return (
    <>
      <button className="pause-button estilo-botao-global" onClick={() => setIsPaused(!isPaused)}><b> <TbPlayerPause fontSize={25}/></b></button>
      <div className="pergunta" style={{ fontSize: '25px' }}>
        <div style={{ marginTop: '20px' }}>
          {desiredWords[0].split('').map((letter, index) => (
            <span key={index} style={{ color: wordColor[letter] || 'white', marginRight: '10px' }}>{letter}</span>
          ))}
        </div>
      </div>
      {isPaused && (
        <div className="Pause-state">
          <button className="fim" onClick={handleResume}>Retornar</button>
          <button className="fim" onClick={handleReset}>Reiniciar</button>
          <button className="fim" onClick={handleVoltar}>
            Sair
          </button> 
        </div>
      )}
      {isGameOver && (
        <div className="fim-game">
          <img src={Monitor} alt="Monitor" />
          <p>Eficiência: {eficiencia}</p>
          <p>Colisões erradas: {incorrectCollisions}</p>
          <p>Análise Final: {analiseFinal}</p>
          <button className="fim" onClick={handleReset}>Reiniciar</button>
          <button className="fim" onClick={handleVoltar}>
            Sair
          </button> 
        </div>
      )}
      <div className="Container-jogo">
        {fallingLetter && (
          <img
            src={fallingLetter.src}
            alt={fallingLetter.id}
            className="falling-letter"
            style={{ left: `${fallingLetter.x}px`, top: `${fallingLetter.y}px`, position: 'absolute' }}
          />
        )}
        <img
          src={PlayerImage}
          alt="Player"
          className={`player ${playerDirection}`}
          style={{ left: `${playerPosition.x}px`, bottom: '20px' }}
        />
      </div>
      <div className="chao"></div>
    </>
  );
};

export default Telajogo3;
