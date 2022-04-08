import TaskManager from "../hooks/TaskManager";
import TaskLoader from "../hooks/TaskLoader";
import React, {useState} from "react";

export default function AddTask() {
    const {handleAddTask} = TaskManager();
    const [description, setDescription] = useState();

    TaskLoader();

    const handleChangeDescription = (value) => {
        setDescription(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleAddTask(description);
        handleChangeDescription('');
    };

    return (
        <div className="py-2 flex justify-center min-w-full">
            <form className="w-1/2"
                  onSubmit={(e) => onSubmit(e)}>
                <label className="block mb-1 cursor-pointer">Description:
                    <textarea name="description"
                              className="w-full h-20 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                              id="description"
                              value={description}
                              onChange={(e) => handleChangeDescription(e.target.value)}/>
                </label>

                <input type="submit" value="Add Task" className="cursor-pointer text-sm px-4 py-1 text-white bg-green-700 hover:bg-green-500 rounded transition-colors duration-500 mt-2" />
            </form>
        </div>
    )
}
