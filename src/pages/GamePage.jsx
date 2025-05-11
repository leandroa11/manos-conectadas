import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import CameraView from '../components/CameraView';
import { Card } from 'primereact/card';

const GamePage = () => {
  const [targetWord, setTargetWord] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [skipsAvailable, setSkipsAvailable] = useState(3);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won'

  // Lista de palabras para el juego
  const wordList = ["HOLA", "MUNDO", "COMUNICACION", "INCLUSION"];

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setTargetWord(randomWord);
    setCurrentLetterIndex(0);
    setCorrectLetters([]);
    setSkipsAvailable(3);
    setGameStatus('playing');
  };

  const handleDetection = (detectedLetter) => {
    if (gameStatus !== 'playing') return;

    const expectedLetter = targetWord[currentLetterIndex].toUpperCase();
    if (detectedLetter.toUpperCase() === expectedLetter) {
      setCorrectLetters([...correctLetters, detectedLetter.toUpperCase()]);
      if (currentLetterIndex === targetWord.length - 1) {
        setGameStatus('won');
      } else {
        setCurrentLetterIndex(currentLetterIndex + 1);
      }
    }
  };

  const handleSkip = () => {
    if (skipsAvailable > 0) {
      setCurrentLetterIndex(currentLetterIndex + 1);
      setSkipsAvailable(skipsAvailable - 1);
    }
  };

  const renderWordDisplay = () => {
    return targetWord.split('').map((letter, index) => (
      <span
        key={index}
        className="text-4xl mx-2"
        style={{
          color: index < correctLetters.length ? '#22C55E' : '#64748B',
          minWidth: '30px'
        }}
      >
        {index < correctLetters.length ? correctLetters[index] : '_'}
      </span>
    ));
  };

  return (
    <div className="main-content flex justify-content-center p-4" style={{ minHeight: '80vh' }}>
      <div className="grid w-full">
        {/* Columna Juego */}
        <div className="col-12 md:col-4 flex justify-content-center align-items-start">
          <Card className="h-full" style={{ maxHeight: '550px', width: '100%' }}>
            <h2 className="text-3xl mb-5 text-center">Juego de Señas</h2>
            <div className="flex flex-column align-items-center">
              <div className="mb-5 flex justify-content-center">
                {renderWordDisplay()}
              </div>

              <div className="text-xl mb-3">
                Letra actual: {targetWord[currentLetterIndex]?.toUpperCase() || '¡Completado!'}
              </div>

              <div className="flex gap-3 mb-5">
                <Button
                  label={`Saltar (${skipsAvailable})`}
                  icon="pi pi-forward"
                  onClick={handleSkip}
                  disabled={skipsAvailable === 0 || gameStatus !== 'playing'}
                  className="p-button-outlined p-button-help"
                />
                <Button
                  label="Nuevo Juego"
                  icon="pi pi-replay"
                  onClick={startNewGame}
                  className="p-button-outlined"
                />
              </div>

              {gameStatus === 'won' && (
                <div className="text-green-500 text-2xl font-bold">
                  ¡Felicidades! ¡Palabra completada!
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Columna Cámara */}
        <div className="col-12 md:col-4 flex justify-content-center align-items-start">
          <div className="mt-4 md:mt-0 pl-0 md:pl-3 text-center" style={{ width: '100%', height: '100%' }}>
            <Card className="h-full" title="Resultado de Detección" >
              <CameraView
                onDetection={handleDetection}
                showStatus={gameStatus === 'playing'}
              />
            </Card>
          </div>
        </div>

        {/* Columna Adicional */}
        <div className="col-12 md:col-4 flex justify-content-center align-items-start">
          <div className="mt-4 md:mt-0 pl-0 md:pl-3 text-center" style={{ minHeight: '550px', width: '100%' }}>
            <Card className="h-full" style={{ maxHeight: '550px', width: '100%' }}>
              <h2 className="text-3xl mb-5 text-center">Instrucciones</h2>
              <p className="text-center">
                Completa la palabra detectando las señas correctas con tu cámara.
                Puedes saltar letras si es necesario, pero tienes un número limitado de intentos.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;