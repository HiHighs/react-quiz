import { useReducer, useState } from 'react';

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'dec':
      return state - 1;
    case 'inc':
      return state + 1;
    case 'set':
      return action.payload;
    default:
      console.log('Something went wrong');
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);

  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    //setCount((count) => count - step);
    dispatch({ type: 'dec' });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    //setCount((count) => count + step);
    dispatch({ type: 'inc' });
  };

  const defineCount = function (e) {
    dispatch({ type: 'set', payload: Number(e.target.value) });
    //setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    //setCount(0);
    setStep(1);
  };

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
