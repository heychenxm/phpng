@extends('layout.admin')

@section('link')
@endsection

@section('content')
<div ng-controller="user.controller as ctrl">
    <rs-table items="ctrl.users"
        columns="ctrl.columns"
        actions="ctrl.actions">

    </rs-table>
</div>
@endsection