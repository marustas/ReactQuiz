import { useReducer } from "react";

const reducer = (state, action) => {
  const { payload, type } = action;
  const { count, step } = state;
  switch (type) {
    case "inc":
      return { ...state, count: count + step };
    case "dec":
      return { ...state, count: count - step };
    case "defineCount":
      return { ...state, count: payload };
    case "defineStep":
      return { ...state, step: payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("Unknown action");
  }
};
function DateCounter() {
  const inititalState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, inititalState);
  const { count, step } = state;

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec", payload: -1 });
  };

  const inc = function () {
    dispatch({ type: "inc", payload: 1 });
  };

  const defineCount = function (e) {
    dispatch({ type: "defineCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "defineStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
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
