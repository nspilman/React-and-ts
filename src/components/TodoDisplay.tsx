
import React from 'react';

type TodoDisplayProps ={
    userId : number ,
    id : number,
    title : string,
    completed : boolean
}

const TodoDisplay : React.SFC<TodoDisplayProps>= (props) => {
    const { userId, id, title, completed } = props
    return (
    <div style={{padding:"1em",borderBottom:"5px solid #674070", borderRadius:"1em"}}
        className = "row">
        <div className = "col-sm-3">
        {userId}
        </div>
        <div className = "col-sm-3">
        {id}
        </div>
        <div className = "col-sm-3">
        {title}
        </div>
        <div className = "col-sm-3">
        {completed}
        </div>
    </div>
    )
}

export default TodoDisplay
