var surveyModule = angular.module('surveyModule', []);

surveyModule.directive('createQuestion', function(){
    var create;
    create = function(scope, element, attrs){
        var link = angular.element(element.children()[0]);
        link.onclick(alert("ahg"));
    }
    return {
        restrict:'E',
        link: create
    };
});