(function () {
    var app = angular.module('movies');

    var HttpService = function ($http) {
        this.getData = function () {
            return $http.get('components/mocks/mock-data.json');
        };
    };

    HttpService.$inject = ['$http'];

    app.service('HttpService', HttpService);
}());