'use strict';

angular
  .module('warningcomFrontendApp')
  .config(['$stateProvider', '$urlRouterProvider', function (StateProvider, UrlRouterProvider) {

    UrlRouterProvider.otherwise('/');

    StateProvider

      .state('homepage', {
        url: '/',
        views: {
          navbar: { templateUrl: 'views/partials/navbar.html' },
          sidebar: { templateUrl: 'views/partials/sidebar.html' },
          footer: { templateUrl: 'views/partials/footer.html' },
          content: {
            templateUrl: 'views/index.html'
          }
        }
      })


  }]);