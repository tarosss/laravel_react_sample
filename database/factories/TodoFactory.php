<?php

namespace Database\Factories;

use App\Todo;
use Illuminate\Database\Eloquent\Factories\Factory;

class TodoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Todo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition( )
    {
        return [
            "taskName" => $this->faker->name,
            "taskContents" => $this->faker->realText(),
            "isDone" => 0,
  
        ];
    }
}
