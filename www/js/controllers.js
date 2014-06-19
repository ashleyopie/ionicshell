angular.module('starter.controllers', [])

.controller('LoadingCtrl', function($scope, $ionicLoading) {
    $scope.show = function() {
        $ionicLoading.show({
            template: 'Loading...'
        });
    };
    $scope.hide = function() {
        $ionicLoading.hide();
    };
})

.controller('HomeCtrl', function($scope) {})


.controller('AccountCtrl', function($scope) {});