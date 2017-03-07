(function () {
    var app = angular.module('movies');

    var DetailMovieController = function ($scope, $state, $stateParams) {
        if (!$stateParams.movie.name) {
            $state.go('default');
        }
        $scope.movie = $stateParams.movie;
    };

    DetailMovieController.$inject = ['$scope', '$state', '$stateParams'];

    app.controller('DetailMovieController', DetailMovieController);
}());