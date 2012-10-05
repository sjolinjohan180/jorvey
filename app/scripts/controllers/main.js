'use strict';

angularAppApp.controller('MainCtrl', function($scope, $http) {
    $scope.selectedAnswers = {};
    $http.get('data/dataseed.json').success(function(data){
        $scope.questions = data;
    });

    $scope.orderProp = 'label';
});
