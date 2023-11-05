const FinishScreen = ({ points, maxPoints }) => {
  const percentage = Math.ceil((100 * points) / maxPoints);
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPoints} ({percentage} %)
    </p>
  );
};

export default FinishScreen;
