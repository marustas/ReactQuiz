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
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  return (
    <div className="timer">
      {minutes < 10 ? `0${minutes}` : minutes} :{" "}
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};
export default Timer;
