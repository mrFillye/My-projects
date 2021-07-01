import React from "react";
import styled from "styled-components";

export function Form({ setInputText, todos, setTodos, inputText, setstatus, level, selectLevel }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        level: level,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setstatus(e.target.value);
  };

  return (
    <>
      <Forms>
        <Input placeholder="Enter your task" value={inputText} type="text" onChange={inputTextHandler} />
        <Select name="todos" onChange={selectLevel}>
          <option value="Low">Low</option>
          <option value="Middle">Middle</option>
          <option value="Hard">Hard</option>
        </Select>

        <Button onClick={submitHandler} type="submit">
          +
        </Button>
      </Forms>

      <h1>Задачи:</h1>

      <Filter name="todos" onChange={statusHandler}>
        <option value="all">ALL</option>
        <option value="completed">COMPLETED</option>
        <option value="uncompleted">UNCOMPLETED</option>
      </Filter>
    </>
  );
}

const Forms = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  font-size: 18px;
  border: none;
  background: #f8f8f8;
  padding: 10px 10px;
  margin: 0px 5px;
  transition: 0.5s;

  &:focus {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    outline: none;
  }
`;

const Select = styled.select`
  border: none;
  background: #1572b6;
  color: #fff;
  padding: 0px 10px;
  margin: 0px 2.5px;
  transition: 0.5s;

  &:focus {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    outline: none;
  }
`;
const Button = styled.button`
  border: none;
  padding: 0px 20px;
  margin: 0px 2.5px;
  font-size: 20px;
  background: #19a15f;
  color: white;

  &:focus {
    outline: none;
  }
`;

const Filter = styled(Select)`
  padding: 10px 10px;
  background: #f2f2f2;
  color: #000;
`;
