import {TASKS} from '../../app/shared/TASKS';


export const selectAllTasks = () => {
    return TASKS;
};

export const selectedTaskById = (id) => {
    return TASKS.find(task => task.id === id);
};