<?php

namespace App\Http\Requests;

use App\Models\Task;
use Illuminate\Foundation\Http\FormRequest;

/**
 * @property-read Task $task
 * @property-read bool|null $completed
 */
class UpdateTaskRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'description' => 'sometimes',
            'completed' => 'sometimes:boolean',
        ];
    }

    public function validated($key = null, $default = null): array
    {
        $validated = parent::validated($key, $default);

        if ($this->completed === null) {
            return $validated;
        }

        if ($this->completed && $this->task->completed_at) {
            return $validated;
        }

        $validated['completed_at'] = $this->completed ? now() : null;

        return $validated;
    }
}
