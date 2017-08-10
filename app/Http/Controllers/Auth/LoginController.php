<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Login_log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function show()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $flag = Auth::attempt(['email' => $email, 'password' => $password]);
        $message = array('result' => '', 'reason' => '');
        if ($flag)
        {
            $log = new Login_log();
            $log['ip'] = $request->getClientIp();
            $log['user_id'] = $user = Auth::user()->id;
            $log->save();
            $message['result'] = true;
            $message['reason'] = '登录成功';
            return $message;
        }
        else
        {
            $message['result'] = false;
            $message['reason'] = '账号密码不匹配';
            return response($message, 400);
        }
    }

    public function logout()
    {
        Auth::logout();
    }
}
