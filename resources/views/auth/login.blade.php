@extends('layout.admin')
@section('title')
    Login -- Myxuan
@endsection

@section('sidebar')
@endsection

@section('content')
    <div class="login-wrapper" ng-controller="static.login.controller as ctrl" ng-class="{'form-success': !ctrl.flag}">
        <div class="login-container">
            <h1>{$ ctrl.title $}</h1>

            <form class="login-form" ng-show="ctrl.flag">
                <input type="email" placeholder="Email" ng-model="ctrl.email">
                <input type="password" placeholder="Password" ng-model="ctrl.password">
                <button type="submit" ng-click="ctrl.submit()">Login</button>
            </form>
        </div>

        <ul class="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
@endsection
