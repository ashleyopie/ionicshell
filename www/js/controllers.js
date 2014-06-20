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

// A simple controller that fetches a list of data from a service
.controller('BeerIndexCtrl', function($scope, BeerService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.beers = BeerService.all();
})


// A simple controller that shows a tapped item's data
.controller('BeerDetailCtrl', function($scope, $stateParams, BeerService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.beer = BeerService.get($stateParams.beerId);
});
