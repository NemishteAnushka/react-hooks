import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";

function TodoProjectUsingUseReducer() {
  const [todo, setTodo] = useState("");

  const reducer = (state, action) => {
    if (action.type === "ADDTOLIST") {
      return [...state, { id: uuid(), task: todo, completed: false }];
    }
    if (action.type === "DELETE_TODO") {
      return state?.filter((todo) => todo.id !== action.payload);
    }
    if (action.type === "TOGGLE_COMPLETED") {
      return state?.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    }
    return state;
  };
  const initialTodos = [{ id: 1, task: "Homework", completed: true }];
  const [state, dispatch] = useReducer(reducer, initialTodos);

  return (
    <>
      <div>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          placeholder="Enter todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({
              type: "ADDTOLIST",
            });
          }}
        >
          Add to list
        </button>
      </div>
      <ul>
        {state?.map((items) => (
          <div key={items.id}>
            <li>{items.id}</li>
            <li>{items.task}</li>
            <li>
              {items.completed === true
                ? "Completed task"
                : "Not Completed task"}
            </li>
            <button
              onClick={() => {
                dispatch({
                  type: "DELETE_TODO",
                  payload: items.id,
                });
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: "TOGGLE_COMPLETED",
                  payload: { id: items.id },
                });
              }}
            >
              Toggle Completed
            </button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default TodoProjectUsingUseReducer;
