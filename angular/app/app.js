var app = angular.module('Twitter', []);
app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
app.controller('twitter_controller', function($scope, $http) {
    $http.get('http://localhost:3000/api/tweets')
        .success(function(data) {
            console.log(data);
        }).error(function(data) {
            console.log(data);
        })
});