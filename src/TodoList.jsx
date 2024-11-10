import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Sample-task", id: uuidv4(), isDone: false }]);
  let [newTodo, setnewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setnewTodo("");
  };

  let updateTodoValue = (event) => {
    setnewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let maskAllasDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markasDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button onClick={() => markasDone(todo.id)}>Mark-as-Done</button>
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={maskAllasDone}>mask-All-as-Done</button>
    </div>
  );
}
