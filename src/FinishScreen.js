const FinishScreen = ({ points, maxPoints }) => {
  const percentage = Math.ceil((100 * points) / maxPoints);
  let emoji;
  switch (percentage) {
    case 100:
      emoji = "🥇";
      break;
    case percentage >= 80 && percentage < 100:
      emoji = "🎉";
      break;
    case percentage >= 50 && percentage < 80:
      emoji = "🙂";
      break;
    case percentage > 0 && percentage < 50:
      emoji = "🤔";
      break;
    default:
      emoji = "🤦‍♂️";
      break;
  }
  return (
    <p className="result">
      {emoji} You scored <strong>{points}</strong> out of {maxPoints} (
      {percentage} %)
    </p>
  );
};

export default FinishScreen;
