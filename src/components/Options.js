import { useQuiz } from "../context/QuizContext";

const Options = () => {
  const { answer, dispatch, questions, index } = useQuiz();
  const question = questions.at(index);
  const { options, correctOption } = question;
  const isAnswered = answer !== null;
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          disabled={isAnswered}
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            isAnswered ? (index === correctOption ? "correct" : "wrong") : ""
          }`}
          onClick={() => dispatch({ type: "answer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
