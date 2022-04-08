import { useContext, useEffect } from "react";
import { TasksContext } from "./Hook";

export default function TaskLoader() {
    const { fetchTasks } = useContext(TasksContext);

    useEffect(() => fetchTasks(), [fetchTasks])
}
