import React, { useState, useEffect } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { MDBIcon } from "../../node_modules/mdbreact";

const Form = ({ setInputText, todos, setTodos, inputText, setstatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setstatus(e.target.value);
  };

  return (
    <Forms>
      <input value={inputText} type="text" onChange={inputTextHandler} />

      <button onClick={submitHandler} type="submit">
        +
      </button>

      <div className="select">
        <select name="todos" className="filter-app" onChange={statusHandler}>
          <option value="all">ALL</option>
          <option value="completed">COMPLETED</option>
          <option value="uncompleted">UNCOMPLETED</option>
        </select>
      </div>
    </Forms>
  );
};

const Forms = styled.form`
  display: flex;
  justify-content: center;
`;

export default Form;
