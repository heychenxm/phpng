@extends('layout.admin')

@section('content')
    <div ng-controller="exam.controller as ctrl">
        <div>
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                    <a href="#question" aria-controls="messages" role="tab" data-toggle="tab">Question</a>
                </li>
                <li role="presentation">
                    <a href="#exam" aria-controls="settings" role="tab" data-toggle="tab">Exam</a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="question">
                    <rs-table items="ctrl.questions"
                              columns="ctrl.questionColumns"
                              actions="ctrl.questionActions">
                    </rs-table>
                </div>
                <div role="tabpanel" class="tab-pane" id="exam">
                    <rs-table items="ctrl.papers"
                              columns="ctrl.paperColumns"
                              actions="ctrl.paperActions">
                    </rs-table>
                </div>
            </div>
        </div>
    </div>
@endsection