/// <reference path="node_modules/definitely-typed-angular/angular.d.ts" />
(function () {
    'use strict';
    
    angular
    .module('myModule')
    .controller
    .controller('myController', myController);
    
    myController.$inject = ['$http'];
    
    function myController($http) {
        
    }
    
})();