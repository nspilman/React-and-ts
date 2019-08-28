import React from 'react';
import { todo } from "../interfaces/todos"
import TodoDisplay from "./TodoDisplay"

interface TodoWindowProps {
    todos: todo[],
   }

const TodoWindow :React.SFC<TodoWindowProps> = (props) => {
    return (
    <div style={{backgroundColor:"#FFFFFF",height:"60vh",width:"100%", margin:".5em", borderRadius:"1em",overflow:"scroll"}}>
        {props.todos.map(
            todo => {
                return (
                    <TodoDisplay 
                    userId = {todo.userId} 
                    id = {todo.id} 
                    title={todo.title} 
                    completed = {todo.completed}
                    key = {todo.id + todo.title}/>
                )
            }
        )}

    </div>    
    )
}
export default TodoWindow
