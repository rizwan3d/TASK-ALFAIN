<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Employee;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for ( $i = 0; $i < 1000; $i++ ) {
            Employee::create([ 
                'full_name'     => $faker->name,
                'date_of_birth' => $faker->date,
                'department_id'    => $faker->randomFloat( 1, 2, 3 ),
                'position'      => $faker->jobTitle,
                'employee_type' => $faker->randomElement( [ 'hourly', 'rate' ] ),
                'hourly_rate'   => $faker->randomFloat( 2, 10, 50 ),
                'monthly_rate'  => $faker->randomFloat( 2, 1000, 5000 ),
            ]);
        }
    }
}