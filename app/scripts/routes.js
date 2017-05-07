'use strict';

angular
  .module('warningcomFrontendApp')
  .config(['$stateProvider', '$urlRouterProvider', function (StateProvider, UrlRouterProvider) {

    UrlRouterProvider.otherwise('/');

    StateProvider

      .state('homepage', {
        url: '/',
        views: {
          content: {
            templateUrl: 'views/dashboard/index.html'
          }
        }
      });


    // Auth States
    StateProvider
      .state('auth', {
        url: '/auth',
        views: {
          content: { template: '<ui-view name="content" />' }
        }
      })

      .state('auth.login', {
        url: '/login',
        views: {
          content: {
            templateUrl: 'views/auth/login'
          }
        }
      })

      ;


  }]);
