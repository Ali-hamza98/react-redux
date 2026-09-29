import React from 'react';
import { useSelector } from 'react-redux';

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return <div>Current value of the counter is :{counter}</div>;
};

export default DisplayCounter;
