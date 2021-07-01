import React from "react";
import { Todo } from "../ToDo/ToDo";

export function TodoList({ todos, setTodos, filteredToDos }) {
  return (
    <div className="todo-content">
      <div className="todo-list">
        {filteredToDos.map((todo) => (
          <Todo setTodos={setTodos} todos={todos} todo={todo} level={todo.level} key={todo.id} text={todo.text} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
