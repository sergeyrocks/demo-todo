<?php

namespace App\Repository;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class BaseRepository implements EloquentRepositoryInterface
{
    protected $model;

    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    public function all(array $columns = ['*'], array $relations = []): Collection
    {
        return $this->model->with($relations)->latest()->get($columns);
    }

    public function allTrashed(): Collection
    {
        return $this->model->onlyTrashed()->get();
    }

    public function find(
        int $id,
        array $columns = ['*'],
        array $relations = [],
        array $appends = []
    ): ?Model {
        return $this->model
            ->with($relations)
            ->findOrFail($id, $columns)
            ->append($appends);
    }

    public function findTrashed(int $id): ?Model
    {
        return $this->model->withTrashed()->findOrFail($id);
    }

    public function create(array $attributes): ?Model
    {
        return $this->model->create($attributes);
    }

    public function update(Model $model, array $attributes): Model
    {
        $model->update($attributes);

        return $model;
    }

    public function delete(Model $model): bool
    {
        return $model->delete();
    }

    public function restore(Model $model): bool
    {
        return $model->restore();
    }
}
