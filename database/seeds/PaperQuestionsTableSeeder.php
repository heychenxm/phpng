<?php

use Illuminate\Database\Seeder;

class PaperQuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 1; $i < 5; $i++)
        {
            DB::table('paper_questions')->insert([
                'paper_id' => 1,
                'question_id' => $i,
                'mark' => 0,
                'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }

        for($i = 1; $i < 10; $i++)
        {
            DB::table('paper_questions')->insert([
                'paper_id' => 2,
                'question_id' => $i,
                'mark' => 1,
                'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
