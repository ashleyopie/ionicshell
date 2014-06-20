angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Init', function($resource) {


})

.factory('Brewery', function($http, Distance, Beer) {

})
    .factory('Beer', function($http) {

    })
    .factory('Distance', function() {
        return {
            getDistance: function(lat1, lon1, lat2, lon2) {

                var R = 6371; // Radius of the earth in km
                var dLat = deg2rad(lat2 - lat1); // deg2rad below
                var dLon = deg2rad(lon2 - lon1);
                var a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                var d = R * c; // Distance in km


                return d / 1.609344; //return distance in miles


                function deg2rad(deg) {
                    return deg * (Math.PI / 180);
                }
            }
        };
    })

    .factory('BeerService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var beers = [
    { id: 0, title: 'Featured Beers',  },
    { id: 1, title: 'Breweries Near Me', },
    { id: 2, title: 'All Beers', },
    { id: 3, title: 'All Breweries', },
    { id: 4, title: 'My Favorities', },
    { id: 5, title: 'Add a Brewery', }
  ];

  return {
    all: function() {
      return beers;
    },
    get: function(beerId) {
      // Simple index lookup
      return beers[beerId];
    }
  };
});
