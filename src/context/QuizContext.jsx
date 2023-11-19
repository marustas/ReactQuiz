import { useContext, createContext, useReducer, useEffect } from "react";
const SECONDS_PER_QUESTION = 20;

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  remainingTime: null,
};

function reducer(state, action) {
  const { type, payload } = action;
  const { index, questions, points, highScore, remainingTime, status } = state;

  switch (type) {
    case "dataReceived":
      return { ...state, questions: payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        remainingTime: questions.length * SECONDS_PER_QUESTION,
      };
    case "answer":
      const { correctOption, questionPoints } = questions.at(index);
      return {
        ...state,
        answer: payload,
        points: payload === correctOption ? points + questionPoints : points,
      };
    case "next":
      return { ...state, index: index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finish",
        highScore: highScore < points ? points : highScore,
      };
    case "restart":
      return {
        ...initialState,
        highScore: highScore,
        questions: questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        remainingTime: remainingTime - 1,
        status: remainingTime === 0 ? "finish" : status,
      };
    default:
      throw new Error("Unknown type");
  }
}

const QuizProvider = ({ children }) => {
  const [
    { questions, status, index, answer, points, highScore, remainingTime },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce(
    (prev, cur) => prev + cur.questionPoints,
    0
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        index,
        questions,
        status,
        answer,
        points,
        highScore,
        remainingTime,
        maxPoints,
        numQuestions,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("Quiz context was used outside the QuizProvider");
  } else {
    return context;
  }
}

export { QuizProvider, useQuiz };
