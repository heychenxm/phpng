@extends('layout.admin')

@section('content')
<div ng-controller="sidebar.controller as ctrl">
    <rs-table items="ctrl.sidebars"
        columns="ctrl.columns"
        actions="ctrl.actions">

    </rs-table>
</div>
@endsection