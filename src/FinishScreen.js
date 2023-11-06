const FinishScreen = ({ points, maxPoints, highScore, dispatch }) => {
  const percentage = Math.ceil((100 * points) / maxPoints);
  let emoji;
  if (percentage === 100) {
    emoji = "🥇";
  } else if (percentage >= 80 && percentage < 100) {
    emoji = "🎉";
  } else if (percentage >= 50 && percentage < 80) {
    emoji = "🙂";
  } else if (percentage > 0 && percentage < 50) {
    emoji = "🤔";
  } else {
    emoji = "🤦‍♂️";
  }

  return (
    <>
      <p className="result">
        {emoji}
        You scored <strong> {points} </strong> out of {maxPoints} ( {percentage}{" "}
        % )
      </p>
      <p className="highscore"> Highscore: {highScore} </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
};

export default FinishScreen;
