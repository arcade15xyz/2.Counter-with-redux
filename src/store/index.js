import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';


export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREASE = 'increase';
export const TOGGLE = 'toggle';



const initialState = {
  counter: 0,
  showCounter: true
};

createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const counterReducer = (state = initialState,action) =>{

  if(action.type === INCREMENT){
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if(action.type === 'decrement') {
    return {
      counter: state.counter -1,
      showCounter: state.showCounter
    }
  }

  if(action.type === INCREASE) {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }
  if(action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state;
}

const store = createStore(counterReducer);

export default store;