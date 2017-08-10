<?php

use Illuminate\Database\Seeder;

class PapersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('papers')->insert([
            'user_id' => 1,
            'question_ids' => '1,2,3,4,5',
            'uid' => md5(time()),
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('papers')->insert([
            'user_id' => 1,
            'question_ids' => '3,4,5,6,7',
            'uid' => md5(time() + 10),
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
