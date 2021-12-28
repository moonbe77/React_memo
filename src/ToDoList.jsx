import React, { useMemo, useState, useRef, useCallback } from "react";
import ToDo from "./Todo";
import { uniqueNamesGenerator, Config, starWars } from "unique-names-generator";
import { nanoid } from "nanoid";
import { CirclePicker, SliderPicker } from "react-color";

const customConfig = {
  dictionaries: [starWars],
  separator: " ",
  length: 1
};

const initialList = [
  { id: nanoid(), name: "buy stuf", completed: false },

  { id: nanoid(), name: "sell stuf", completed: true }
];

const ToDoList = () => {
  const [todosList, setTodosList] = useState([]);
  const [color, setColor] = useState("#eeffdd");
  const rendersCounter = useRef(0);
  rendersCounter.current = rendersCounter.current + 1;

  const handleAddToDo = () => {
    setTodosList([
      ...todosList,
      {
        id: nanoid(),
        name: uniqueNamesGenerator(customConfig),
        completed: false
      }
    ]);
  };

  const handleChange = useCallback(
    (id) => {
      const updatedTasks = todosList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      });

      setTodosList(updatedTasks);
    },
    [todosList]
  );

  const deleteTodo = useCallback(
    (id) => {
      console.log(id);
      const updatedTasks = todosList.filter((todo) => todo.id !== id);
      console.log(updatedTasks);

      setTodosList(updatedTasks);
    },
    [todosList]
  );

  const deleteAll = () => {
    setTodosList([]);
  };

  const conpleteAll = () => {
    const updatedTasks = todosList.map((todo) => {
      return {
        ...todo,
        completed: true
      };
    });

    setTodosList(updatedTasks);
  };
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };
  const MemoTodo = React.memo(ToDo);

  console.count("render list");

  return (
    <div>
      <span className="todo-renders_tag">{rendersCounter.current}</span>
      <div>
        <div>
          <SliderPicker color={color} onChange={handleChangeComplete} />
          <button onClick={handleAddToDo}>add</button>
          <button onClick={deleteAll}>delete all</button>
          <button onClick={conpleteAll}>complete all</button>
        </div>
        <div className="tods-wrapper">
          {todosList.map((todo) => (
            <MemoTodo
              color={color}
              key={todo?.id}
              todo={todo}
              setComplete={handleChange}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
