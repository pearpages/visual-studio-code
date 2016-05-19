/// <reference path="node_modules/definitely-typed-angular/angular.d.ts" />
(function () {
    'use strict';

    angular
        .module('myModule')
        .controller('myController', myController);

    myController.$inject = ['$http'];

    function myController($http) {
        function there(whatever) {
            return whatever;
        }
    }

    function helloWorld(name) {
        console.log('Hello World ' + name);
    }
})();