(function () {
    angular
        .module('movies', ['ui.router', 'ngMaterial'])
        .config(function ($stateProvider, $urlRouterProvider) {
            var empty = {
                name: 'default',
                url: '/',
                templateUrl: 'components/templates/empty-movie.html'
            };

            var detailMovie = {
                name: 'detailMovie',
                url: '/movie',
                templateUrl: 'components/templates/detail-movie.html',
                controller: 'DetailMovieController',
                params: {
                    movie: {}
                }
            };

            var detailSection = {
                name: 'detailSection',
                url: '/section',
                templateUrl: 'components/templates/detail-section.html',
                controller: 'DetailSectionController',
                params: {
                    section: {}
                }
            };

            $stateProvider.state(empty);
            $stateProvider.state(detailMovie);
            $stateProvider.state(detailSection);
            $urlRouterProvider.otherwise('/');
        });
}());