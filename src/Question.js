import Options from "./Options";
const Question = ({ question, dispatch, answer }) => {
  const { options, correctOption } = question;
  return (
    <div>
      <h4> {question.question}</h4>
      <Options
        correctOption={correctOption}
        options={options}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
};

export default Question;
