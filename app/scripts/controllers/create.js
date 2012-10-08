'use strict';

angularAppApp.controller('CreateCtrl', function($scope, $http) {
    $scope.questions = [];

    $scope.addQ = function(){
        $scope.questions.push({qId:$scope.questions.length+1, label:"", freeText: false, qType:"", answers: []});
    };

    $scope.addA = function(q){
        q.answers.push({index:q.answers.length+1, value:""});
    };

    $scope.removeQ = function(q){
        var questions = $scope.questions;

        questions = _.without(questions, q);
        questions = $scope.cleanUpIds(questions);

        $scope.questions = questions;
    };

    $scope.removeA = function(q, a){
        var answers = q.answers;

        answers = _.without(answers, a);
        answers = $scope.cleanUpIds(answers);

        q.answers = answers;
    };

    $scope.cleanUpIds = function(array){
        for(var i = 0; i < array.length; i++){
            array[i].index = i + 1;
        }
        return array;
    };

    $scope.qTypes = [];

    $http.get('data/qtypes.json').success(function(data){
        $scope.qTypes = data;
    });

});