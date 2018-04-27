(function () {



    angular.module('crimeHelper.unsafeAreaByGenderController', [
        'barChart.service'
    ])
        .controller("unsafeAreaByGenderController", unsafeAreaByGenderCtrl);

    unsafeAreaByGenderCtrl.$inject = [ '$scope', '$http', 'api' ];

    function unsafeAreaByGenderCtrl( $scope,$http, api ) {

        // two dates the user enters on 'demo.view.html'
        var vm = this;
        vm.race = "Select Race";
        vm.gender = "Select Gender";
        vm.genderList = ["Male", "Female", "NotKnown", "Trans"];
        vm.selectRace = function (race) {
            vm.race = race.RACE;
        };
        vm.selectGender = function (gender) {
            vm.gender = gender;
        };
        api.GetRace.get({}, function (response) {
            vm.raceList = response.areas;
        });


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