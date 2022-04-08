import { createContext, useCallback, useMemo, useState } from "react";

interface Task {
    id: number;
    description: string;
    completed: boolean;
}

export interface TasksContextData {
    tasks: Task[];
    isLoading: boolean;
    fetchTasks: () => void;
    removeTask: (taskId: number) => void;
    completeTask: (taskId: number, completed: boolean) => void;
    addTask: (description: string) => void;
}

export const tasksContextDefaultValue: TasksContextData = {
    tasks: [],
    isLoading: false,
    fetchTasks: () => null,
    removeTask: () => null,
    completeTask: () => null,
    addTask: () => null,
}

export const TasksContext = createContext<TasksContextData>(tasksContextDefaultValue);

function useTasksContextValue(): TasksContextData {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchTasks= useCallback(() => {
        setIsLoading(true);
        fetch('/api/tasks')
            .then(response => response.json())
            .then((fetchedTasks) => {
                setTasks(fetchedTasks.data);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [setTasks]);

    const removeTask = useCallback((taskId: number) => {
        setIsLoading(true);
        fetch(`/api/tasks/${taskId}`, {
            method: 'DELETE'
        })
            .then(() => {
                const newTasks = [...tasks];
                const removedTaskIndex = newTasks.findIndex(task => task.id === taskId);
                if (removedTaskIndex > -1) {
                    newTasks.splice(removedTaskIndex, 1);
                }
                setTasks(newTasks);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [setTasks, tasks]);

    const completeTask = useCallback((taskId: number, completed: boolean) => {
        setIsLoading(true);
        fetch(`/api/tasks/${taskId}`, {
            body: JSON.stringify({completed: completed}),
            method: 'PATCH',
            headers: {'Content-type': 'application/json'},
        })
            .then(() => {
                fetchTasks();
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [setTasks, tasks]);

    const addTask = useCallback((description: string) => {
        setIsLoading(true);
        fetch(`/api/tasks`, {
            body: JSON.stringify({ description: description}),
            headers: {'Content-type': 'application/json'},
            method: 'POST'
        })
            .then(() => {
                fetchTasks();
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [setTasks, tasks]);

    return useMemo(() => ({
        tasks,
        isLoading,
        fetchTasks,
        completeTask,
        removeTask,
        addTask,
    }), [
        tasks,
        isLoading,
        fetchTasks,
        completeTask,
        removeTask,
        addTask
    ]);
}

export default useTasksContextValue;
