<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admins;
use Faker\Generator as Faker;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Hash;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
       Admins::create([
            'email' => 'SuperAdmin@gmail.com',
            'name' => 'superAdmin',
            'mobile_phone' => '01010000000',
            'password' => '123456',
            'isActive' => 1,
            'isSuperAdmin' => 1,
        ]);



    }
}
