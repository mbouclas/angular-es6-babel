var angular = require('angular');

import UserController from './User/UserController';

angular.module('myApp', [])
    .controller('UserController', UserController);

