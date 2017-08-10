<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ URL::asset('frameworks/bootstrap-3.3.7/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('frameworks/font-awesome/css/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('css/login.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('css/toast.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('css/accordion.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('css/table.css') }}">
    <title>@yield('title')</title>
    @yield('link')
</head>
<body ng-app="app" ng-controller="app.controller">

@section('navbar')
    <!-- 导航条 -->
    @if (Auth::user())
    <nav class="navbar navbar-default navbar-fixed-top clear-margin">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Brand</a>
            </div>

            <div>
                <ul class="nav navbar-nav navbar-right">
                    <!-- <li><a href="#">Link</a></li> -->
                    <li class="dropdown" uib-dropdown>
                        <a uib-dropdown-toggle>
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" uib-dropdown-menu role="menu"
                            aria-labelledby="single-button">
                            <li role="menuitem"><a href="#">Action</a></li>
                            <li role="menuitem"><a href="#">Another action</a></li>
                            <li role="menuitem"><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li role="menuitem"><a href="#">Separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    @endif
@show
<div>
    @section('sidebar')
        <!-- 左侧侧边栏 -->
        <div class="accordion">
            <accordion items='sidebars'></accordion>
        </div>
    @show
    <div class="content-container">
        <div class="container-fluid">
            @yield('content')
        </div>
    </div>
    <div class="clearfix"></div>
</div>
<script src="{{ URL::asset('frameworks/jquery/jquery-3.2.1.min.js') }}"></script>
<script src="{{ URL::asset('frameworks/jquery/jquery.qrcode.min.js') }}"></script>
<script src="{{ URL::asset('frameworks/bootstrap-3.3.7/js/bootstrap.min.js') }}"></script>
<script src="{{ URL::asset('frameworks/angular-1.6.4/angular.js') }}"></script>
<script src="{{ URL::asset('frameworks/angular-1.6.4/lib/angular-cookies.js') }}"></script>
<script src="{{ URL::asset('frameworks/angular-1.6.4/lib/angular-sanitize.js') }}"></script>
<script src="{{ URL::asset('frameworks/bower_components/tv4/tv4.js') }}"></script>
<script src="{{ URL::asset('frameworks/bower_components/objectpath/ObjectPath.js') }}"></script>
<script src="{{ URL::asset('frameworks/bower_components/angular-schema-form/schema-form.js') }}"></script>
<script src="{{ URL::asset('frameworks/bower_components/angular-schema-form/bootstrap-decorator.js') }}"></script>
<script src="{{ URL::asset('frameworks/angular-1.6.4/ui-bootstrap-tpls-2.5.0.min.js') }}"></script>
<script src="{{ URL::asset('frameworks/angular-1.6.4/smart-table.min.js') }}"></script>
@yield('script')
<?php
/**
 * 获取文件夹下所有文件
 * @param $directory 需要获取的文件夹
 * @param bool $recursive 是否递归获取子文件夹
 * @return array
 */
function directoryToArray($directory, $recursive = false) {
    $array_items = array();
    if(!is_dir($directory)) return "$directory folder does not exist";
    if ($handle = opendir($directory)) {
        while (false !== ($file = readdir($handle))) {
            if ($file != "." && $file != ".." && $file != ".DS_Store") {
                if (is_dir($directory. "/" . $file)) {
                    if($recursive) {
                        $array_items = array_merge($array_items, directoryToArray($directory. "/" . $file, $recursive));
                    }
//                    $file = $directory . "/" . $file;
//                    $array_items[] = preg_replace("/\/\//si", "/", $file);
                } else {
                    if (strpos($file, '.html') === false){
                        $file = $directory . "/" . $file;
                        $array_items[] = preg_replace("/\/\//si", "/", $file);
                    }
                }
            }
        }
        closedir($handle);
    }
    return $array_items;
}

function handle($fileList, $dir) {
    $arr = array();
    foreach ($fileList as $file) {
        $arr[] =strstr($file, $dir);
    }
    return $arr;
}

function sortList($list) {
    for ($i = 0; $i < count($list); $i++) {
        for ($k = $i; $k < count($list); $k++) {
            $il = explode('/', $list[$i]);
            $kl = explode('/', $list[$k]);
            if (count($il) > count($kl)) {
                $tmp = $list[$i];
                $list[$i] = $list[$k];
                $list[$k] = $tmp;
            }
            if (count($il) == count($kl) && strpos($kl[count($kl) - 1], 'module') !== false) {
                $tmp = $list[$i];
                $list[$i] = $list[$k];
                $list[$k] = $tmp;
            }
            if (count($il) == count($kl) && strpos($kl[count($kl) - 1], 'service') !== false
                && strpos($il[count($il) - 1], 'module') === false) {
                $tmp = $list[$i];
                $list[$i] = $list[$k];
                $list[$k] = $tmp;
            }
        }
    }
    return $list;
}
$path = realpath('.') . '/js';
$fileList = directoryToArray($path, true);
$list = handle($fileList, 'js');
$files = sortList($list);
foreach ($files as $file) {
    echo '<script src="' . '/' . $file . '"></script>';
}
?>
</body>
</html>