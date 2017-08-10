<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
| 其他说明：路由单数（get）获取基本的HTML页面，复数获取数据
|
*/

Route::get('/', function () {
    return view('welcome');
});

// 登录模块
Route::group(['namespace' => 'Auth'], function(){
    // 控制器在 "App\Http\Controllers\Auth" 命名空间下

    // Login Routes...
    Route::get('login', 'LoginController@show')->name('login');
    Route::post('login', 'LoginController@login');
    Route::get('logout', 'LoginController@logout');
    // Registration Routes...
    Route::get('register', 'RegisterController@showRegistrationForm');
    Route::post('register', 'RegisterController@register');
    // Password Reset Routes...
    Route::get('password/reset', 'ForgotPasswordController@showLinkRequestForm');
    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
    Route::get('password/reset/{token}', 'ResetPasswordController@showResetForm');
    Route::post('password/reset', 'ResetPasswordController@reset');
});

// 需要用户认证才能访问的路由
// 使用中间件Auth
Route::group(['middleware' => 'auth'], function(){
    Route::group(['namespace' => 'Test'], function(){
        // 控制器在 "App\Http\Controllers\Test" 命名空间下
        Route::get('test', 'TestController@index');
        Route::get('tree', 'TestController@tree');
    });

    Route::group(['namespace' => 'Admin'], function(){
        // 控制器在 "App\Http\Controllers\Admin" 命名空间下
        Route::get('/admin', 'AdminController@index');

        // 用户管理
        Route::get('user', 'UserController@index');
        Route::get('users', 'UserController@all');
        Route::post('users', 'UserController@create');
        Route::patch('user/{id}', 'UserController@update');
        Route::delete('user/{id}', 'UserController@destroy');

        // 侧边栏菜单管理
        Route::get('sidebar', 'SidebarController@index');
        Route::get('sidebars', 'SidebarController@all');
        Route::post('sidebars', 'SidebarController@create');
        Route::patch('sidebar/{id}', 'SidebarController@update');
        Route::delete('sidebar/{id}', 'SidebarController@destroy');

        // 角色管理
        Route::get('role', 'RoleController@index');
        Route::get('roles', 'RoleController@all');
        Route::post('roles', 'RoleController@create');
        Route::patch('role/{id}', 'RoleController@update');
        Route::delete('role/{id}', 'RoleController@destroy');

        // 微测
        Route::get('exam', 'ExamController@index');
        Route::get('exam/questions', 'ExamController@getQuestions');
        Route::post('exam/questions', 'ExamController@createQuestion');
        Route::get('exam/papers', 'ExamController@getPapers');
        Route::post('exam/papers', 'ExamController@createPaper');
        Route::get('exam/paper/{id}', 'ExamController@showPaper');
        Route::get('exam/papers/{id}', 'ExamController@getPaper');
    });
});
