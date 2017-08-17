<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RolesTabelSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(SidebarsTableSeeder::class);
        $this->call(QuestionsTableSeeder::class);
        $this->call(OptionsTableSeeder::class);
        $this->call(PapersTableSeeder::class);
        $this->call(PaperQuestionsTableSeeder::class);
    }
}
