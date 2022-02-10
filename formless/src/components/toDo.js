import React from "react";
import '../components/toDo.css'


const TodoList = props => {
    return(
        <div className="todo-list">
            <div className="description">
                <p>{props.description}</p>
            </div>
            <div className="input-wrapper">
                <input 
                    type="checkbox" 
                    defaultChecked={props.completed}
                    onChange={props.handleChange}/>
            </div>
        </div>
    )
}

export default TodoList;