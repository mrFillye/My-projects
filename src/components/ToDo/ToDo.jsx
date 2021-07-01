import React from "react";
import style from "./ToDo.module.css";
import styled from "styled-components";

export function Todo({ text, todos, todo, setTodos, level }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <MyTodo>
      <TodoItem
        className={`${level === "Low" ? style.todo_green : level === "Middle" ? style.todo_orange : style.todo_red} ${
          todo.completed ? "completed" : ""
        }`}
      >
        {text}
      </TodoItem>
      <BtnComplete onClick={completeHandler}>Complete</BtnComplete>
      <BtnDelete onClick={deleteHandler}>Delete</BtnDelete>
    </MyTodo>
  );
}

const MyTodo = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const TodoItem = styled.li`
  max-width:40%;
  min-width:40%;
  text-align:left;
  list-style:none;
  padding 15px 10px;
  color:#fff;
`;

const BtnComplete = styled.button`
  margin: 0px 2px;
  border: none;
  background: #19a15f;
  color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const BtnDelete = styled(BtnComplete)`
  background: #f14941;
`;
