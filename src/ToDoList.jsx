import React, { useMemo, useState, useRef, useCallback } from "react";
import ToDo from "./Todo";
import { uniqueNamesGenerator, Config, starWars } from "unique-names-generator";
import { nanoid } from "nanoid";
const customConfig = {
  dictionaries: [starWars],
  separator: " ",
  length: 1
};

const initialList = [
  { id: nanoid(), name: "buy stuf", complete: false },

  { id: nanoid(), name: "sell stuf", complete: true }
];

const ToDoList = () => {
  const [todosList, setTodosList] = useState(initialList);
  const rendersCounter = useRef(0);
  rendersCounter.current = rendersCounter.current + 1;

  const handleAddToDo = () => {
    setTodosList([
      ...todosList,
      {
        id: nanoid(),
        name: uniqueNamesGenerator(customConfig),
        complete: false
      }
    ]);
  };

  const updateTodo = (id) => {
    console.log(id);

    const updatedTasks = todosList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    return updatedTasks;
  };

  const handleChange = useCallback((id) => setTodosList(updateTodo(id)), []);
  // const list = useMemo(handleAddToDo, []);

  // console.log("render ToDoList", todosList);

  const MemoTodo = React.memo(ToDo);

  return (
    <div>
      <button onClick={handleAddToDo}>add</button>
      <span className="todo-renders_tag">{rendersCounter.current}</span>
      {todosList.map((todo) => (
        <MemoTodo key={todo?.id} todo={todo} setComplete={handleChange} />
      ))}
    </div>
  );
};

export default ToDoList;
