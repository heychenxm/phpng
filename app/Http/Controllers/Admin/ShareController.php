<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ShareController extends Controller
{
    // 分享试卷页面
    public function sharePaper($id)
    {
        return view('share.exam.paper', compact('id'));
    }

}
