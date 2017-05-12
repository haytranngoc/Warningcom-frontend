'use strict';

angular
  .module('warningcomFrontendApp')
  .config(['$stateProvider', '$urlRouterProvider', function (StateProvider, UrlRouterProvider) {

    UrlRouterProvider.otherwise('/');

    StateProvider

      .state('welcome', {
        url: '/',
        views: {
          header: { templateUrl: 'views/partials/header.html'},
          footer: { templateUrl: 'views/partials/footer.html'},
          content: {
            templateUrl: 'views/dashboard/index.html',
            
          }
        }
      });


    // Auth States
    StateProvider
      .state('auth_login', {
        url: '/auth',
        views: {
          header: { templateUrl: 'views/partials/header.html'},
          footer: { templateUrl: 'views/partials/footer.html'},
          content: { 
            templateUrl: 'views/auth/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'loginCtrl'
          }
        },
        params: {
          email: null,
          redirect: null
        }
      })  

      .state('auth_register', {
        url: '/auth/register',
        views: {
          header: { templateUrl: 'views/partials/header.html' },
          footer: { templateUrl: 'views/partials/footer.html' },
          content: {
            templateUrl: 'views/auth/register.html',
            // controller: 'RegisterCtrl',
            // controllerAs: 'registerCtrl'
          }
        }
      });

      //news
    StateProvider
      .state('dashboard', {
        url: '/dashboard',
        abstract: true,
        views: {
          header: { templateUrl: 'views/partials/header.html'},
          footer: { templateUrl: 'views/partials/footer.html'},
          content: { 
            templateUrl: 'views/dashboard/layout.html',
          }
        }
      })

      .state('dashboard.news', {
        url:'/news',
        views: {
          content: {
            templateUrl: 'views/dashboard/news.html',
             // controller: 'WarningnewCtrl',
             // controllerAs: 'warningnewCtrl'
          }
        }
      })

      .state('dashboard.helps', {
        url:'/helps',
        views: {
          content: {
            templateUrl: 'views/dashboard/helps.html',
            
          }
        }
      });

    


    


  }]);
