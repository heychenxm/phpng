<?php

use Illuminate\Database\Seeder;

class OptionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++)
        {
            for ($j = $i; $j < $i + 4; $j++)
            {
                DB::table('options')->insert([
                    'content' => "$j",
                    'question_id' => $i + 1,
                    'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
                ]);
            }
        }
    }
}
