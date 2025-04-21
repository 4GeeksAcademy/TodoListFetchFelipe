import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, taskCompleted }) => {
    return (
        <ul>
            {tasks.length === 0 ? (
                <li className="no-tasks">No hay tareas, añade una nueva tarea</li>
            ) : (
                tasks.map((task) => (
                    <TodoItem 
                    key={task.id} 
                    task={task} 
                    deleteTask={() => deleteTask(task.id)}
                    taskCompleted= {()=> taskCompleted(task)} />
                ))
            )}
        </ul>
    );
};

export default TodoList;