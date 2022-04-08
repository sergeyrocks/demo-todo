<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Resources\TaskCollection;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Repository\TaskRepository;

class TaskController extends Controller
{
    private TaskRepository $taskRepository;

    public function __construct(TaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    public function index(): TaskCollection
    {
        return new TaskCollection($this->taskRepository->all());
    }

    public function store(StoreTaskRequest $request): TaskResource
    {
        return new TaskResource($this->taskRepository->create($request->validated()));
    }

    public function show(Task $task): TaskResource
    {
        // did not use repository method as $task is resolved with url binding
        return new TaskResource($task);
    }

    public function update(UpdateTaskRequest $request, Task $task): TaskResource
    {
        return new TaskResource($this->taskRepository->update($task, $request->validated()));
    }

    public function destroy(Task $task): TaskCollection
    {
        $this->taskRepository->delete($task);

        return new TaskCollection($this->taskRepository->all());
    }
}
