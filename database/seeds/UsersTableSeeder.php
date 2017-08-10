<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'myxuan',
            'email' => '1092315236@qq.com',
            'password' => bcrypt('myxuan'),
            'role_id' => -1,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        $i = 0;
        while ($i < 20)
        {
            DB::table('users')->insert([
                'name' => str_random(10),
                'email' => str_random(4).'@gmail.com',
                'password' => bcrypt('123456'),
                'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            ]);
            $i++;
        }
    }
}
