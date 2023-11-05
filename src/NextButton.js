const NextButton = ({ dispatch, answer }) => {
  return answer === null ? null : (
    <button
      className="btn btn-ui"
      onClick={() => {
        dispatch({ type: "next" });
      }}
    >
      Next
    </button>
  );
};

export default NextButton;
