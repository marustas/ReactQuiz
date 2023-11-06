import { useEffect } from "react";
const Timer = () => {
  useEffect(function () {
    setInterval(function () {}, 1000);
  }, []);
  return <div className="timer">23:19</div>;
};
export default Timer;
