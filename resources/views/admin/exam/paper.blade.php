@extends('layout.admin')

@section('content')
    <div>
        <p>试卷名称</p>
        <p>创建时间</p>
        <p>试卷分类</p>
        <img src="" alt=""><!-- 二维码 -->
    </div>
    <div ng-controller="exam-detail.controller as ctrl">
        <div class="list-group" ng-repeat="item in ctrl.questions">
            <span class="list-group-item">
                <h4 class="list-group-item-heading">{$ $index + 1 + '、' + item.content $}</h4>
                <span class="list-group-item-text" ng-repeat="option in item.options">
                    <label>
                        <input type="radio" name="{$ item.id $}" id="{$ option.id $}">
                        <label for="{$ option.id $}">{$ option.content $}</label>
                    </label>
                </span>
            </span>
        </div>
    </div>
    <input id="paperId" value='{{ $id }}' hidden>
@endsection