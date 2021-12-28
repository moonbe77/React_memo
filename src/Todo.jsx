import React, { useEffect, useRef, useState } from "react";

const ToDo = ({ todo, setComplete }) => {
  const { id, name, complete } = todo;
  const rendersCounter = useRef(0);
  rendersCounter.current = rendersCounter.current + 1;

  const handleCheckbox = () => {
    setComplete(id);
  };

  return (
    <div className="todo">
      <div className="todo-content_wrapper">
        <div className="todo-id">{id}</div>
        <div className="todo-name">{name}</div>
      </div>
      <div className="todo-check">
        <span>{rendersCounter.current}</span>
        <input
          type="checkbox"
          value="checked"
          onChange={handleCheckbox}
          checked={complete}
          name={id}
        />
      </div>
    </div>
  );
};

export default ToDo;
