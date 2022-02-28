import { useState } from 'react';


const Counter = ({ value }) => {

  const [ counter, setCounter ] = useState(value);


  const handleIncrement = () => setCounter(counter + 1);
  const handleReset = () => setCounter(value);
  const handleDecrement = () => setCounter(counter - 1);

  
  return (
    <>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={handleIncrement} >+1</button>
      <button onClick={handleReset} >Reset</button>
      <button onClick={handleDecrement} >-1</button>
    </>
  );
};


export default Counter;
