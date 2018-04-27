(function(){
    'use strict';

    angular.module("crimeHelper.routes",[
        'ui.router',
        'api.service',
        'crimeHelper.homeController',
        'crimeHelper.unsafeAreaController',
        'crimeHelper.areaByCatController'
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
                .state('unsafeAreas',{
                    url: '/unsafeAreas',
                    templateUrl: "unsafeArea.html",
                    controller: "unsafeAreaController",
                    controllerAs: "unsafeAreaCtrl"
                })
                .state('areaByCat', {
                    url: '/areaByCat',
                    templateUrl: "query1.html",
                    controller: "AreaByCatController",
                    controllerAs: "areaByCatCtrl"
                })
        }]);
})();