angular.module('portfolioApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]); 