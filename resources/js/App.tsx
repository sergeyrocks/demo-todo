import React, { createContext, useContext, useState } from "react";
import List from "./Components/List";
import AddTask from "./Components/AddTask";
import useTasksContextValue, { TasksContext, tasksContextDefaultValue } from "./hooks/Hook";

export default function App() {
    const tasksContextValue = useTasksContextValue();

    return (
        <TasksContext.Provider value={tasksContextValue}>
            <AddTask/>
            <List/>
        </TasksContext.Provider>
    );
}
