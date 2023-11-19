import { useQuiz } from "../context/QuizContext";

const Progress = () => {
  const { index, numQuestions, points, maxPoints, answer } = useQuiz();
  return (
    <header className="progress">
      {/*Number(a != null) results in 1 if true and 0 if false */}{" "}
      <progress max={numQuestions} value={index + Number(answer !== null)} />{" "}
      <p>
        Question <strong> {index + 1} </strong> / {numQuestions}{" "}
      </p>{" "}
      <p>
        <strong> {points} </strong> / {maxPoints}{" "}
      </p>{" "}
    </header>
  );
};
export default Progress;
