import { useEffect } from "react";
const Timer = ({ dispatch, remainingTime }) => {
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return <div className="timer">{remainingTime}</div>;
};
export default Timer;
