import React, { useReducer } from "react";

function ExampleUseReducer() {
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
      return { ...state, count: state.count + 1 };
    }
    if (action.type === "RESET") {
      return { ...state, count: 0 };
    }
    if (action.type === "DECREMENT") {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    return state;
  };
  //useReducer takes return [ state , functionToUpdateState(dispatch)]
  // useReducer as a arguments takes 2 things
  // 1 : reducerFunction (1st arg)
  // 2 : initialState

  //reducer Funtion as a arguments takes 2 things
  // 1 : state
  // 2 : Action

  //dispatch function calls reducer function it as parameters passes the action

  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>UseReducer() hook</h1>
      <h1>Application using useReducer()</h1>
      <hr />
      <h1>{state?.count}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "INCREMENT",
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "RESET",
          });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "DECREMENT",
          });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default ExampleUseReducer;
