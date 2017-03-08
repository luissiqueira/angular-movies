(function () {
    var app = angular.module('movies');

    var movieDisplayDirective = function () {
      return {
          restrict: 'E',
          scope: {
              info: '='
          },
          templateUrl: 'components/directives/movie-display/template.html',
          link: function ($scope, $element, $attributes) {

          }
      }
    };

    app.directive('movieDisplay', movieDisplayDirective);
}());