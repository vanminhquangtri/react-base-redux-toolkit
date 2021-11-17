import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const storeNumber = useSelector((state) => {
    return state.Number;
  });
  return (
    <div>
      <h1>Result</h1>
      <button>{storeNumber?.count || 0}</button>
    </div>
  );
};

export default Result;
