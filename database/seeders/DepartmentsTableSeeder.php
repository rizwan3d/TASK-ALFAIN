<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $departments = [
            ['name' => 'HR'],
            ['name' => 'Finance'],
            ['name' => 'IT'],
        ];

        DB::table('departments')->insert($departments);
    }
}
