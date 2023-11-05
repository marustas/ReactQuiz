import Options from "./Options";
const Question = ({ question }) => {
  const { options } = question;
  return (
    <div>
      <h4> {question.question}</h4>
      <Options options={options} />
    </div>
  );
};

export default Question;
