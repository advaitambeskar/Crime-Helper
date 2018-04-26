(function(){

    var app = angular.module("crimeHelper.homeController",[
        'api.service'
    ]);

    app.controller("HomeController",homeCtrl);

    function homeCtrl($state){
        var vm = this;

    }

    homeCtrl.$inject = ["$state"];
})();