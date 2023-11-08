// Timer.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { startTimer, stopTimer, resetTimer } from '../redux/timerSlice';

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const { startTime, isRunning, elapsedTime } = useSelector((state: RootState) => state.timer);

  useEffect(() => {
    let intervalId:number|undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        dispatch(startTimer());
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, dispatch]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <h1>Таймер</h1>
      <p>Прошло времени: {formatTime(elapsedTime)}</p>
      <button onClick={() => (isRunning ? dispatch(stopTimer()) : dispatch(startTimer()))}>
        {isRunning ? 'Пауза' : 'Старт'}
      </button>
      <button onClick={() => dispatch(resetTimer())}>Сброс</button>
    </div>
  );
};

export default Timer;
