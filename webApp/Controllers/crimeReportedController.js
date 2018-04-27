/**
 * Created by neels on 4/26/2018.
 */
(function () {



    angular.module('crimeHelper.crimeReportedController', [
        'barChart.service'
    ])
        .controller("crimeReportedController", crimeReportedCtrl);

    crimeReportedCtrl.$inject = [ '$scope', '$http' ];

    function crimeReportedCtrl( $scope,$http ) {

        // two dates the user enters on 'demo.view.html'
        var vm = this;



        console.log(vm.area1);
        debugger

        var page  = 1;

        vm.myFunc = function() {
            console.log("sdadadad");

         debugger

            var url = "http://localhost:3000/api/v1/getCrimesByArea?Area="+vm.area1+"&page="+page+"&perPage=5";
            console.log("inside myfunc");

            $http.get(url)
                .then(function(response) {
                    console.log("Inside get Call");
                    console.log(response.data);
                    var g = response.data;
                    $scope.result = g.areas;
                    console.log("VM result");
                    console.log($scope.result);
                });

        };


        vm.nextPage = function() {
            console.log("sdadadad");
            page = page+1;
            debugger

            var url = "http://localhost:3000/api/v1/getCrimesByArea?Area="+vm.area1+"&page="+page+"&perPage=5";
            console.log("inside myfunc");

            $http.get(url)
                .then(function(response) {
                    console.log("Inside get Call");
                    console.log(response.data);
                    var g = response.data;
                    $scope.result = g.areas;
                    console.log("VM result");
                    console.log($scope.result);
                });

        };

        vm.backPage = function() {
            console.log("sdadadad");
            page = page-1;
            debugger

            var url = "http://localhost:3000/api/v1/getCrimesByArea?Area="+vm.area1+"&page="+page+"&perPage=5";
            console.log("inside myfunc");

            $http.get(url)
                .then(function(response) {
                    console.log("Inside get Call");
                    console.log(response.data);
                    var g = response.data;
                    $scope.result = g.areas;
                    console.log("VM result");
                    console.log($scope.result);
                });

        };


    }


})();