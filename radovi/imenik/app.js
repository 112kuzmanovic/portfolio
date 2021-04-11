var app=angular.module('myApp',[]);

app.controller('mainController',function($scope,movieDB){

$scope.persons=movieDB;

});

