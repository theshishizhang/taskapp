import { TASKS } from "./TASKS";

export const selectAllTasks = () => {
    return TASKS
};

export const selectTaskById = (id) => {
    return TASKS.find((task)=> task.id === parseInt(id))
};