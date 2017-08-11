@extends('layout.admin')

@section('content')
<!--     <div ng-controller="exam-detail.controller as ctrl">
        <div class="list-group" ng-repeat="x in ctrl.paper">
            <div class="list-group-item default">
            	<button type="button" class="close danger" aria-label="Close" ><span aria-hidden="true">&times;</span></button>
	           	<h4 class="list-group-item-heading" >{$ $index+1 + "." + x.content$}</h4>   
                <p class="list-group-item-text">
                    <div class="radio">
                        <form>
        	              	<ul  ng-repeat="y in x.options track by $index"  style="display: inline">                          
                                <label for="">
                                    <input type="radio" name="checkOptions"><li>{$ $index+1 + "." + y.content$}</li>
                                </label>
        	                </ul>
                        </form>
                    </div>
                </p>   
            </div>
        </div>
    </div> -->
    <input id="paperId" value='{{ $id }}' hidden>

    <!-- 手机端 -->
    <br>
    <br>
    <div ng-controller="exam-detail.controller as ctrl" style="margin-right:150px; ">
        <div class="list-group" ng-repeat="x in ctrl.paper">
            <div class="list-group-item default">
                <h4 class="list-group-item-heading" >{$ $index+1 + "." + x.content$}</h4>   
                <p class="list-group-item-text">
                    <div class="radio">
                        <form>
                            <ul  ng-repeat="y in x.options track by $index"  style="display: inline">                          
                                <label for="">
                                    <input type="radio" name="checkOptions"><li>{$ $index+1 + "." + y.content$}this is a test! this is a test</li>
                                </label>
                            </ul>
                        </form>
                    </div>
                </p>   
            </div>
        </div>
        <button class="btn btn-default form-inline">提交</button>
    </div>
@endsection