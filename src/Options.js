const Options = ({ options, answer, dispatch, correctOption }) => {
  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          disabled={answer !== null}
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            index === correctOption ? "correct" : "wrong"
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
