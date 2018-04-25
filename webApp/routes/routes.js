(function(){
    'use strict';

    angular.module("hangout.routes",[
        'ui.router'
    ])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
            $locationProvider.hashPrefix('');
            $urlRouterProvider.when('', "/");

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: "angularApp/templates/homepage.html"
                })
        }]);
})();