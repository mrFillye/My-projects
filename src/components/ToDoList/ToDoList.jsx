import React from "react";
import Todo from "../ToDo/ToDo";

const TodoList = ({ todos, setTodos, filteredToDos, level }) => {
  return (
    <div className="todo-content">
      <ul className="todo-list">
        {filteredToDos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            level={todo.level}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
