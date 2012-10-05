'user strict';

angularAppApp.controller('CreateCtrl', function($scope, $http) {
    $scope.questions = [];


    $scope.addQ = function(){
        $scope.questions.push({qId:$scope.questions.length+1, label:"", freeText: false, qType:"", answers: []});
    }

    $scope.addA = function(q){
        q.answers.push({index:q.answers.length+1, value:""});
    }

    $scope.removeQ = function(q){
        $scope.questions.splice(q.index-1, 1);
    }

    $scope.removeA = function(q, a){
        q.answers.splice(a.index-1, 1);
    }

    $scope.qTypes = [];

    $http.get('data/qtypes.json').success(function(data){
        $scope.qTypes = data;
    });

});