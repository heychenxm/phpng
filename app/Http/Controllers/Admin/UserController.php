<?php

namespace App\Http\Controllers\Admin;

use Gate;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index()
    {
        return view('admin.user.index');
    }

    public function all()
    {
        $users = User::all();
        return array(
            'items' => $users
        );
    }

    public function create(Request $request)
    {
        $user = new User;
        $user['name'] = $request->get('name');
        $user['email'] = $request->get('email');
        $role = $request->get('role');
        if (empty($role))
        {
            $user['role_id'] = 1;
        }
        else
        {
            $user['role_id'] = $role;
        }
        $user['password'] = bcrypt('hello123456');
        $user->save();
        return $user;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if (Gate::allows('delete-user', $user)) {
            User::destroy($id);
        }
        return '你没有权限执行该操作';
    }
}
