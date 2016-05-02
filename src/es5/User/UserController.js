(function () {
    'use strict';

    angular.module('myApp')
        .controller('UserController',UserController)

    function UserController() {
        this.packageName = 'User';
        console.log('in controller');
    }
})();