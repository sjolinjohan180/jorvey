'use strict';

describe('Controller: CreateCtrl', function() {

    // load the controller's module
    beforeEach(module('angularAppApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller) {
        scope = {};
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach an empty list to the scope', function() {
        expect(scope.questions.length).toBe(0);
    });

    var q = MainCtrl.addQ();

    it('should show length of questions to be one', function() {
        expect(scope.questions.length).toBe(1);
    });

    var a = MainCtrl.addA(q);


    it('should show length of answers to be one', function() {
        expect(scope.questions.answers.length).toBe(1);
    });
});
