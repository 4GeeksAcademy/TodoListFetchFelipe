const baseUrlUsers = "https://playground.4geeks.com/todo/users/";

const baseUrlTodo = "https://playground.4geeks.com/todo/";

const USERNAME = "Felipe"


export const createUser = async () => {
    try {
        const request = await fetch(`${baseUrlUsers}${USERNAME}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        });
        if (!request.ok){
            console.log ("Fallo en creación");
        }
        return request.ok;
    } catch (error) {
        console.log("Error en createUser:", error);
        return false;
    }
};

export const getTodoList = async () => {
    try {
        const request = await fetch(`${baseUrlUsers}${USERNAME}`)
        if (!request.ok){
            console.log('Error obteniendo listado.');
            if (request.status === 404){
                console.log('No existe usuario.');
            }
            return [];
        }
        const response = await request.json();
        return response.todos || [];
    }
    catch (error) {
        console.log("Error en getTodoList", error)
        return [];
    }
};

export const createPost = async (post) => {
    try {
        const request = await fetch(`${baseUrlTodo}todos/${USERNAME}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });
        if (!request.ok) {
            console.error(`Error creating post: ${request.status}`);
            return null; 
       }
        const response = await request.json();
        return response;
    } catch (error) {
        console.error("Error en createPost:", error);
        return null;
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
            return true;
        }
        console.log("Error al eliminar la tarea");
        return false;

    } catch (error) {
        console.error("Error en deletePost:", error);
        return false;
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
        return null;
    }
};

export const deleteAllTasks = async () => {
    try {
        const response = await fetch(`${baseUrlUsers}${USERNAME}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });

        return response.status === 204;
    } catch (error) {
        console.error("Error en deleteAllTasks:", error);
        return false;
    }
};