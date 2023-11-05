import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],
  status: "loading",
};
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "dataReceived":
      return { ...state, question: payload, status: "ready" };

    default:
      throw new Error("Unknown type");
  }
}
function App() {
  const [state, dispath] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => dispath({ type: "dataReceived", payload: data }))
      .catch((error) => console.log("Error"));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/20</p>
        <p>Qustion</p>
      </Main>
    </div>
  );
}

export default App;
