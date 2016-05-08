(function () {
    'use strict';

    angular
        .module('datePickerDemo')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/index', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .when('/', {
                templateUrl: 'app/main/intro.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
