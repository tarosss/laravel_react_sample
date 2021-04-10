<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Todo;


class TodoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $todos = Todo::factory(10)->create();
    }
}
