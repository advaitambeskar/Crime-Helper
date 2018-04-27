(function(){
    'use strict';

    angular.module("crimeHelper.routes",[
        'ui.router',
        'api.service',
        'crimeHelper.homeController',
        'crimeHelper.unsafeAreaController',
        'crimeHelper.unsafeAreaByGenderController',
        'crimeHelper.crimeReportedController'

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
                 .state('unsafeAreaByGender',{
                    url:'/unsafeAreaByGender',
                    templateUrl: "unsafeAreabyGender.html",
                    controller: "unsafeAreaByGenderController",
                    controllerAs: "unsafeAreaByGenderCtrl"

                })
                .state('crimeReported',{
                    url:'/crimeReported',
                    templateUrl: "crimeReported.html",
                    controller: "crimeReportedController",
                    controllerAs: "crimeReportedCtrl"

                })
        }]);
})();