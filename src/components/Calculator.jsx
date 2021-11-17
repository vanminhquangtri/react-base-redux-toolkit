import React from 'react';
import { useDispatch } from 'react-redux';
import {
  increaseNumber,
  decreaseNumber,
  assignNumber,
} from '../store/number/reducers';

const Calculator = () => {
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(increaseNumber());
  };
  const decrease = () => {
    dispatch(decreaseNumber());
  };
  const assign = () => {
    dispatch(assignNumber(new Date().getTime()));
  };
  const reset = () => {
    dispatch(assignNumber(0));
  };
  return (
    <div>
      <h1>Calculator</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={assign}>Assign</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Calculator;
