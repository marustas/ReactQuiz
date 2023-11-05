const Progress = ({ index, numQuestions, points, total }) => {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points} / {total}
      </p>
    </header>
  );
};
export default Progress;
