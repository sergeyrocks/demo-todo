<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property-read int $id
 * @property-read string $description
 * @property-read Carbon|null $completed_at
 * @property-read Carbon|null $created_at
 * @property-read Carbon|null $updated_at
 * @property-read Carbon|null $deleted_at
 */
class TaskResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'description' => $this->description,
            'completed' => (bool) $this->completed_at,
            'created_at' => $this->created_at->format(config('todo-list.default_date_format')),
            'updated_at' => $this->updated_at->format(config('todo-list.default_date_format')),
            'deleted_at' => $this->deleted_at?->format(config('todo-list.default_date_format')),
        ];
    }
}
