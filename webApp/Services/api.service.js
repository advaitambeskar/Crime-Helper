(function () {
    angular.module('api.service',[
        'ngResource'
    ])
        .factory('api',['$resource',function ($resource) {
            return{
                GetUnsafeAreas: $resource('/api/v1/getUnsafeAreas',{},{}),

                GetCategories: $resource('/api/v1/getCategories', {}, {}),

                GetCrimeAreas: $resource('/api/v1/getCrimeAreasCategory', {startTime: '@startTime', endTime: '@endTime', category: '@category'}, {}),

                GetAreas: $resource('/api/v1/getAreas', {}, {})
            };
        }])
})();