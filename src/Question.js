const Question = ({ question }) => {
  const { options } = question;
  return (
    <div>
      <h4> {question.question}</h4>
      <div className="options">
        {options.map((option) => (
          <button key={option} className="btn btn-option">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
