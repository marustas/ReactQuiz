const Options = ({ answer, dispatch, question }) => {
  const isAnswered = answer !== null;
  const { options, correctOption } = question;
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
