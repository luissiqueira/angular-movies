(function () {
    var app = angular.module('movies');

    var DetailSectionController = function ($scope, $state, $stateParams) {
        if (!$stateParams.section.name) {
            $state.go('default');
        }
        $scope.section = $stateParams.section;

        this.showMovie = function (movie) {
            $state.go('detailMovie', {movie: movie});
        };
    };

    DetailSectionController.$inject = ['$scope', '$state', '$stateParams'];

    app.controller('DetailSectionController', DetailSectionController);
}());