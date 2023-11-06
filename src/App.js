import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  remainingTime: 10,
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
      return { ...state, status: "active" };
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

function App() {
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
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen dispatch={dispatch} numQuestions={numQuestions} />
        )}
        {status === "active" && (
          <>
            <Progress
              answer={answer}
              maxPoints={maxPoints}
              index={index}
              numQuestions={numQuestions}
              points={points}
            />
            <Question
              dispatch={dispatch}
              question={questions[index]}
              answer={answer}
            />
            <Footer>
              <Timer remainingTime={remainingTime} dispatch={dispatch} />
              <NextButton index={index} answer={answer} dispatch={dispatch} />
            </Footer>
          </>
        )}
        {status === "finish" && (
          <FinishScreen
            dispatch={dispatch}
            highScore={highScore}
            points={points}
            maxPoints={maxPoints}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
