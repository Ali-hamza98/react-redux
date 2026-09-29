import React from 'react';
import DisplayCounter from './DisplayCounter';
import { useDispatch } from 'react-redux';
const Controls = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter</h2>
      <DisplayCounter />
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Controls;
