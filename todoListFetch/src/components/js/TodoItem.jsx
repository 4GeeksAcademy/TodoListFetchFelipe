import React from "react";

const TodoItem = ({ task, deleteTask, taskCompleted }) => {
    return (
        <li className="todo-item">
       
        <button className="todo-item" onClick={taskCompleted}>
            {task.is_done ? "✅" : "❌"}
        </button>
        {task.is_done ? "✅ " : "🟡 "} {task.label} 
            <span className="delete-btn" onClick={deleteTask}>❌</span>
        </li>
    );
};

export default TodoItem;