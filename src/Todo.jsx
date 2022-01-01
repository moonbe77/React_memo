import React, { useEffect, useRef, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

const ToDo = ({ todo, setComplete, deleteTodo, color }) => {
  const { id, name, completed } = todo;
  const rendersCounter = useRef(0);
  rendersCounter.current = rendersCounter.current + 1;

  const handleCheckbox = () => {
    // alert('test')
    setComplete(id);
    // throw new Error("Required bbhbjh");
  };

  return (
    <ErrorBoundary>
      <div className="todo">
        <div className="todo-content_wrapper">
          {/* <div className="todo-id">{id}</div> */}
          <div className={`todo-name ${completed ? "todo-completed" : " "}`}>
            {name}
            {todo}
          </div>
        </div>
        <div className="todo-check">
          <span>{rendersCounter.current}</span>
          <input
            type="checkbox"
            value="checked"
            onChange={handleCheckbox}
            checked={completed}
            name={id}
          />
          <button
            style={{
              backgroundColor: color
            }}
            onClick={() => deleteTodo(id)}
          >
            🧨
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ToDo;
