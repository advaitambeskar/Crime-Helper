(function () {
    angular.module('api.service',[
        'ngResource'
    ])
        .factory('api',['$resource',function ($resource) {
            return{
                GetUnsafeAreas: $resource('/api/v1/getUnsafeAreas',{},{})
            };
        }])
})();