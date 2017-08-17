@extends('layout.mobile')

@section('content')
    <div ng-controller="mobile.exam.paper as ctrl">
    </div>
    <input id="paperId" value="{{ $id }}" hidden>
@endsection

@section('script')
    <script src="{{ URL::asset('static/api/exam.service.js') }}"></script>
    <script src="{{ URL::asset('mobile/exam/paper.controller.js') }}"></script>
@endsection