import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

const Question = () => {
  const { questions, dispatch, index, answer } = useQuiz();
  const question = questions.at(index);

  return (
    <div>
      <h4> {question.question} </h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
