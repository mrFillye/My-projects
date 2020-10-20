import React, { useState, useEffect } from "react";
import "../App.css";
import TodoList from "./ToDoList/ToDoList";
import Form from "./Form/Form";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setstatus] = useState("all");
  const [filteredtodos, setfilteredtodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredtodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredtodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredtodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>My ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setstatus={setstatus}
      />
      <TodoList
        filteredtodos={filteredtodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
};

export default App;
