import { useQuiz } from "../context/QuizContext";

const NextButton = () => {
  const { dispatch, answer, index } = useQuiz();
  return answer === null ? null : (
    <button
      className="btn btn-ui"
      onClick={() => {
        index < 14 ? dispatch({ type: "next" }) : dispatch({ type: "finish" });
      }}
    >
      {index < 14 ? "Next" : "Finish"}
    </button>
  );
};

export default NextButton;
