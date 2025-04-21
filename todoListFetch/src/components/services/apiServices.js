const baseUrlUsers = "https://playground.4geeks.com/todo/users/";

const baseUrlTodo = "https://playground.4geeks.com/todo/";


export const createUser = async () => {
    try {
        const request = await fetch(`${baseUrlUsers}Felipe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        });
        const response = await request.json();
        return response;
    } catch (error) {
        console.error("Error en createUser:", error);
        throw new Error(error);
    }
};

export const getTodoList = async () => {
    try {
        const request = await fetch(`${baseUrlUsers}Felipe`)
        const response = await request.json();
        console.log(response);

        return response.todos;
    }
    catch (error) {
        console.log(error)
    }
};

export const createPost = async (post) => {
    try {
        const request = await fetch(`${baseUrlTodo}todos/Felipe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        const response = await request.json();
        return response;
    } catch (error) {
        console.error("Error en createPost:", error);
    }
};

export const deletePost = async (postId) => {
    try {
        const request = await fetch(`${baseUrlTodo}todos/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (request.status === 204) {
            return alert("Tarea eliminada")
        }
        alert("Error al eliminar la tarea")

    } catch (error) {
        console.error("Error en deletePost:", error);
    }
};

export const updateTask = async (taskId, updatedTask) => {
    try {
        const request = await fetch(`${baseUrlTodo}todos/${taskId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        });
       if (!request.ok) 
            throw new Error("Error al actualizar la tarea");
        return await request.json();
    } catch (error) {
        console.error("Error en updateTask:", error);
    }
};

export const deleteAllTasks = async () => {
    try {
        const response = await fetch(`${baseUrlUsers}Felipe`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });

        return response.status === 204; // Devuelve true si la eliminación fue exitosa
    } catch (error) {
        console.error("Error en deleteAllTasks:", error);
        return false;
    }
};