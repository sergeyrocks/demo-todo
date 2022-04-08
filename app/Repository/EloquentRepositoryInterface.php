<?php

namespace App\Repository;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

interface EloquentRepositoryInterface
{
    public function all(array $columns = ['*'], array $relations = []): Collection;

    public function allTrashed(): Collection;

    public function find(
        int $id,
        array $columns = ['*'],
        array $relations = [],
        array $appends = []
    ): ?Model;

    public function findTrashed(int $id): ?Model;

    public function create(array $attributes): ?Model;

    public function update(Model $model, array $attributes): Model;

    public function delete(Model $model): bool;

    public function restore(Model $model): bool;
}
