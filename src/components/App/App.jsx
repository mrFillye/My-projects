import React, { useState, useEffect } from "react";
import { TodoList } from "../ToDoList/ToDoList";
import { Form } from "../Form/Form";
import styled from "styled-components";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setstatus] = useState("all");
  const [level, setLevel] = useState("Low");
  const [filteredToDos, setFilteredToDos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredToDos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredToDos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredToDos(todos);
        break;
    }
  }, [todos, status]);

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <Wrapper className="App">
      <header>
        <h1>My ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setstatus={setstatus}
        level={level}
        selectLevel={(e) => setLevel(e.target.value)}
      />
      <TodoList filteredToDos={filteredToDos} setTodos={setTodos} todos={todos} level={level} setLevel={setLevel} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;
