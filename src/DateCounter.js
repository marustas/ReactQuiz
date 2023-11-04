import { useReducer, useState } from "react";

const reducer = (state, action) => {
  const { payload, type } = action;
  return type === "inc" || type === "dec" ? state + payload : payload;
};
function DateCounter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec", payload: -1 });
    // setCount((count) => count - 1);
  };

  const inc = function () {
    dispatch({ type: "inc", payload: 1 });
  };

  const defineCount = function (e) {
    dispatch({ type: "def", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "def", payload: 0 });
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
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
