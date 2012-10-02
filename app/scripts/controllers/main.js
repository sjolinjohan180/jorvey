'use strict';

angularAppApp.controller('MainCtrl', function($scope) {
    $scope.selectedAnswers = {};
    $scope.questions = [
        {
            qId: "1",
            label: "Är du man?",
            FreeText: true,
            qType: "single",
            answers: [
                {
                    label: "Ja",
                    aId: "1"
                },
                {
                    label: "Nej",
                    aId: "2"
                }
            ]
        },
        {
            qId: "2",
            label: "Är du kvinna?",
            FreeText: true,
            qType: "single",
            answers: [
                {
                    label: "Ja",
                    aId: "1"
                },
                {
                    label: "Nej",
                    aId: "2"
                }
            ]
        },
        {
            qId: "3",
            label: "Vilken/vilka presenter vill du ha i julklapp?",
            FreeText: false,
            qType: "multi",
            answers: [
                {
                    label: "En liten get",
                    aId: "1"
                },
                {
                    label: "En lillebror",
                    aId: "2"
                },
                {
                    label: "En plasttiger",
                    aId: "3"
                }
            ]
        }

    ];
});
