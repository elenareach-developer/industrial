import React, { useState, useEffect } from 'react';

function TimerSimple() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval:number|undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (seconds:number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <h1>Таймер</h1>
      <p>Прошло времени: {formatTime(seconds)}</p>
      <button onClick={startTimer} disabled={isRunning}>
        Старт
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Пауза
      </button>
      <button onClick={resetTimer}>Сброс</button>
    </div>
  );
}

export default TimerSimple;
