import TaskManager from "../hooks/TaskManager";
import TaskLoader from "../hooks/TaskLoader";
import React from "react";

export default function List() {
    const {tasks, handleTaskRemove, handleTaskUpdate} = TaskManager();

    TaskLoader();

    return (
        <div className="py-2 flex flex-col justify-center min-w-full">
            {
                tasks.map(task => (
                    <div className="my-4 border-b-2 pb-2 w-1/2 mx-auto" key={task.id}>
                        <div className="col-span-2">
                            <h3 className="text-lg font-bold">
                                Task #{task.id}
                                {task.completed ? '- Completed' : ''}
                            </h3>
                            {task.description}
                        </div>
                        <div className="col-span-1">
                            <button onClick={handleTaskUpdate(task.id, !task.completed)}
                                    className="cursor-pointer text-sm px-4 py-1 text-white bg-green-700 hover:bg-green-500 rounded transition-colors duration-500 mr-1">
                                {task.completed ? 'Incomplete' : 'Complete'}
                            </button>
                            <button onClick={handleTaskRemove(task.id)}
                                    className="cursor-pointer text-sm px-4 py-1 text-white bg-red-700 hover:bg-red-500 rounded transition-colors duration-500 ml-1">
                                Delete
                            </button>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}
