import {useCallback, useContext} from "react";
import {TasksContext} from "./Hook";

export default function TaskManager() {
    const {removeTask, completeTask, addTask, tasks} = useContext(TasksContext);

    const handleTaskRemove = useCallback((taskId: number) => () => {
        removeTask(taskId);
    }, [removeTask]);

    const handleTaskUpdate = useCallback((taskId: number, completed: boolean) => () => {
        completeTask(taskId, completed);
    }, [completeTask]);

    const handleTaskCreate = useCallback((description: string) => () => {
        addTask(description);
    }, [addTask]);

    const handleAddTask = (data) => {
        addTask(data);
    }


    return {
        handleTaskRemove,
        handleTaskUpdate,
        handleTaskCreate,
        handleAddTask,
        tasks
    }
}
