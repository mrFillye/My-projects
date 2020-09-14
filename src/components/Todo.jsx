import React from 'react'; 
import { MDBBtn } from "mdbreact";
import styled from "styled-components";


const Todo = ({text, todos, todo, setTodos})=> {

    const deleteHandler = ()=> {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

 

    const completeHandler = ()=> {
        setTodos(todos.map(item => {
            if(item.id == todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    return(
        <MyTodo className="todo">
            <TodoItem className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</TodoItem>
            <button onClick = {completeHandler} className="fas fa-check">Check</button>
            <button onClick = {deleteHandler} className="fas fa-check">Delete</button>
        </MyTodo>
    )
}

const MyTodo = styled.div `
    display:flex;
    justify-content:center;
`;

const TodoItem  = styled.li`
    list-style:none;
    padding 0px 10px;
`;


export default Todo

