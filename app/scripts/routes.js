'use strict';

angular
  .module('warningcomFrontendApp')
  .config(['$stateProvider', '$urlRouterProvider', function (StateProvider, UrlRouterProvider) {

    UrlRouterProvider.otherwise('/');

    StateProvider

      .state('login', {
        url: '/',
        views: {
          header: { templateUrl: 'views/partials/header.html'},
          footer: { templateUrl: 'views/partials/footer.html'},
          content: {
            templateUrl: 'views/dashboard/index.html'
          }
        }
      });


    // Auth States
    StateProvider
      .state('auth/login', {
        url: '/auth',
        views: {
          header: { templateUrl: 'views/partials/header.html'},
          footer: { templateUrl: 'views/partials/footer.html'},
          content: { 
            templateUrl: 'views/auth/login.html' 
          }
        }
      });

      //dashboard
    StateProvider
      .state('dashboard/news', {
        url: '/dashboard',
        views: {
          header: { templateUrl: 'views/partials/header.html'},
          footer: { templateUrl: 'views/partials/footer.html'},
          content: { 
            templateUrl: 'views/dashboard/news.html',
            controller: 'NewsCtrl',
            controllerAs: 'newsCtrl' 
          }
        }
      });

    


    


  }]);
