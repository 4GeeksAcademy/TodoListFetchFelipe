import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { getTodoList, deletePost, createPost, updateTask, deleteAllTasks, createUser } from "../services/apiServices";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const postUser = async () => {
    try {
      const existingUser = await getTodoList();
      if (existingUser === false) { 
        await createUser();
      }
    } catch (error) {
      console.error("Error al inicializar el usuario:", error);
    }
  };

  const addTask = async (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const body = {
        label: e.target.value.trim(),
        is_done: false
      };
      const task = await createPost(body);
      setTasks([...tasks, task]);
      e.target.value = "";
    }
  };

  const handleGetTodoList = async () => {
    const listTask = await getTodoList();
    setTasks(Array.isArray(listTask) ? listTask : []);
};



  const deleteTask = async (taskId) => {
    await deletePost(taskId);
    setTasks(tasks.filter((tasks) => tasks.id !== taskId));
  };

  const taskCompleted = async (task) => {
    const updatedTask = { ...task, is_done: !task.is_done };
    const result = await updateTask(task.id, updatedTask);
    if (result) setTasks(tasks.map(t => t.id === task.id ? updatedTask : t));
  };

  const clearAllTasks = async () => {
    const deleted = await deleteAllTasks();
    if (deleted) setTasks([]);
  };

  useEffect(() => {
    postUser().then(() => handleGetTodoList());
}, []);


  return (
    <div className="todo-list-container">
      <input type="text" placeholder="Añadir nueva tarea..." onKeyDown={addTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} taskCompleted={taskCompleted} />
      <p>{tasks.length} tarea{tasks.length !== 1 ? "s" : ""} pendiente{tasks.length !== 1 ? "s" : ""}</p>
      <button onClick={clearAllTasks} className="delete-all-btn">🗑 Borrar todas las tareas</button>
    </div>
  );
};

export default App;
