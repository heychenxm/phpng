@extends('layout.admin')

@section('content')
<div ng-controller="role.controller as ctrl">
    <rs-table items="ctrl.roles"
        columns="ctrl.columns"
        actions="ctrl.actions">

    </rs-table>
</div>
@endsection