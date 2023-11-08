// redux/timerSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  startTime: number;
  isRunning: boolean;
  elapsedTime: number;
}

const initialState: TimerState = {
  startTime: 0,
  isRunning: false,
  elapsedTime: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: (state) => {
      if (!state.isRunning) {
        state.startTime = Date.now() - state.elapsedTime;
        state.isRunning = true;
      }
      state.elapsedTime = Math.floor((Date.now() - state.startTime) / 1000);
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state) => {
      state.startTime = 0;
      state.isRunning = false;
      state.elapsedTime = 0;
    },
  },
});

export const { startTimer, stopTimer, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
