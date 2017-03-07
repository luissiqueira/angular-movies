(function () {
    var app = angular.module('movies');

    var MovieController = function ($scope, $state, HttpService) {
        $scope.categories = [{name: 'Carregando...'}];

        HttpService.getData().then(function (response) {
            $scope.categories = response.data;
        }, function (error) {
            console.log(error);
            $scope.categories = [{name: 'Falha ao carregar os dados'}];
        });

        this.showDetail = function (movie) {
            $state.go('detailMovie', {movie: movie});
        };

        this.showDetailSection = function (category) {
            $state.go('detailSection', {section: category});
        };
    };

    MovieController.$inject = ['$scope', '$state', 'HttpService'];

    app.controller('MovieController', MovieController);
}());