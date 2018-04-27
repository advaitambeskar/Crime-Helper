(function () {



    angular.module('crimeHelper.unsafeAreaByGenderController', [
        'barChart.service'
    ])
        .controller("unsafeAreaByGenderController", unsafeAreaByGenderCtrl);

    unsafeAreaByGenderCtrl.$inject = [ '$scope', '$http' ];

    function unsafeAreaByGenderCtrl( $scope,$http ) {

        // two dates the user enters on 'demo.view.html'
        var vm = this;
       var gender1 = vm.gender;
       var age1 = vm.age;
       var race1 = vm.race;


debugger
        vm.myFunc = function() {
            var url = "http://localhost:3000/api/v1/getCrimeAreas/RaceGenderAge?race="+vm.race+"&age="+vm.age+"&gender="+vm.gender;

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