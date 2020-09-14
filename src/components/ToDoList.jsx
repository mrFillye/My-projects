import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredtodos})=> {

    return(
        <div className="todo-content">
            <ul className = "todo-list">
                {filteredtodos.map(todo => (
                    <Todo 
                        setTodos = {setTodos}
                        todos = {todos}
                        todo = {todo}
                        key = {todo.id} 
                        text = {todo.text}    
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;