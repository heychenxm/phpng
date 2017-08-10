<?php

use Illuminate\Database\Seeder;

class SidebarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('sidebars')->insert([
            'display_name' => '首页',
            'name' => 'index',
            'description' => 'home',
            'icon' => 'home',
            'href' => '/admin',
            'sequence' => 1,
            'parent_id' => 0,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('sidebars')->insert([
            'display_name' => '内容展示',
            'name' => 'content',
            'description' => 'content',
            'icon' => 'television',
            'href' => '/content',
            'sequence' => 2,
            'parent_id' => 0,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('sidebars')->insert([
            'display_name' => '互动管理',
            'name' => 'interaction',
            'description' => 'interaction',
            'icon' => 'etsy',
            'href' => '/interaction',
            'sequence' => 3,
            'parent_id' => 0,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('sidebars')->insert([
            'display_name' => '积分会员',
            'name' => 'member',
            'description' => 'member',
            'icon' => 'user',
            'href' => '/member',
            'sequence' => 4,
            'parent_id' => 0,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('sidebars')->insert([
            'display_name' => '系统设置',
            'name' => 'system',
            'description' => 'setting',
            'icon' => 'cog',
            'href' => '/system',
            'sequence' => 5,
            'parent_id' => 0,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('sidebars')->insert([
            'display_name' => '微页',
            'name' => 'webpage',
            'description' => 'webpage',
            'icon' => '',
            'href' => '/webpage',
            'sequence' => 1,
            'parent_id' => 2,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('sidebars')->insert([
            'display_name' => '微站',
            'name' => 'website',
            'description' => 'website',
            'icon' => '',
            'href' => '/website',
            'sequence' => 2,
            'parent_id' => 2,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('sidebars')->insert([
            'display_name' => '微测',
            'name' => 'exam',
            'description' => 'exam',
            'icon' => '',
            'href' => '/exam',
            'sequence' => 1,
            'parent_id' => 3,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('sidebars')->insert([
            'display_name' => '功能管理',
            'name' => 'sidebar',
            'description' => 'sidebar',
            'icon' => '',
            'href' => '/sidebar',
            'sequence' => 1,
            'parent_id' => 5,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('sidebars')->insert([
            'display_name' => '用户管理',
            'name' => 'user',
            'description' => 'user',
            'icon' => '',
            'href' => '/user',
            'sequence' => 2,
            'parent_id' => 5,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        ]);
        DB::table('sidebars')->insert([
            'display_name' => '角色管理',
            'name' => 'role',
            'description' => 'role',
            'icon' => '',
            'href' => '/role',
            'sequence' => 3,
            'parent_id' => 5,
            'created_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        ]);
    }
}
