/**
 * Created by h.hoseini on 10/31/14.
 */
'use strict';

var app = angular.module('Application', ['ngResource']);

app.factory('UserFactory', function($resource){
    return $resource('home/users.json');

});

app.controller('MainCtrl', function($scope, UserFactory) {
    $scope.text = 'Hello World!';
    $scope.data = UserFactory.get();

});