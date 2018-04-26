(function(){
    'use strict';

    angular.module("crimeHelper.routes",[
        'ui.router',
        'api.service',
        'crimeHelper.homeController'
    ])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
            $locationProvider.hashPrefix('');
            $urlRouterProvider.when('', "/");

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: "User.html",
                    controller: "HomeController",
                    controllerAs: "homeCtrl"
                })
        }]);
})();