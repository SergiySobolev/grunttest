"use strict";
var app = angular.module("gt.app.service", [
]);

angular
    .module("gt.app.service")
    .service("gtservice", GtService);

function GtService(){
   this.getName = function(){
       return "Name from service";
   };
}
