"use strict";
var app = angular.module("gt.app", [
    "gt.app.service"
]);

angular
    .module("gt.app")
    .controller("appCtrl", AppController);

AppController.$inject = ['gtservice'];

function AppController(gtservice){
    var vm = this;
    vm.name = gtservice.getName();
}


