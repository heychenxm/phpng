<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mobile</title>
    <link rel="stylesheet" href="{{ URL::asset('frameworks/bootstrap-3.3.7/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('frameworks/font-awesome/css/font-awesome.min.css') }}">
</head>
<body ng-app="mobile">

@yield('content')
<script src="{{ URL::asset('frameworks/jquery/jquery-3.2.1.min.js') }}"></script>
<script src="{{ URL::asset('frameworks/angular-1.6.4/angular.js') }}"></script>
<script src="{{ URL::asset('mobile/mobile.module.js') }}"></script>
<script src="{{ URL::asset('static/utils/utils.module.js') }}"></script>
<script src="{{ URL::asset('static/utils/http.service.js') }}"></script>
<script src="{{ URL::asset('static/api/api.module.js') }}"></script>
@yield('script')
</body>
</html>