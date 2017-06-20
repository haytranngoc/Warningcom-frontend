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
            templateUrl: 'views/welcome/main.html',
            controller: 'MapCtrl',
            controllerAs: 'mapCtrl'
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
        },
        middleware: 'guess'
      })

      // .state('auth_register', {
      //   url: '/auth/register',
      //   views: {
      //     header: { templateUrl: 'views/partials/header.html' },
      //     footer: { templateUrl: 'views/partials/footer.html' },
      //     content: {
      //       templateUrl: 'views/auth/register.html',
      //       // controller: 'RegisterCtrl',
      //       // controllerAs: 'registerCtrl'
      //     }
      //   }
      // });

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
             controller: 'WarningnewCtrl',
             controllerAs: 'warningnewCtrl'
          }
        },
        middleware: 'admin'
      })

      .state('dashboard.helps', {
        url:'/helps',
        views: {
          content: {
            templateUrl: 'views/dashboard/helps.html',

          }
        }
      });
    }])

  //     .run(['$cookies', '$rootScope', '$state', function (Cookies, RootScope, State) {

  //   // Event fired when the transition begins
  //   RootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

  //     RootScope.toggleLoading(true);

  //     var redirectToLogin = function () {
  //       State.transitionTo('auth_login', {
  //         redirect: toState
  //       });
  //       event.preventDefault();
  //     };

  //     var roleMiddleware = function (auth, roles, role_name) {
  //       if (!auth || !roles) {
  //         redirectToLogin();
  //       } else {
  //         var roleIndex = roles.findIndex(function (obj) { return obj.name == role_name; });
  //         if (roleIndex < 0) {
  //           redirectToLogin();
  //         }
  //       }
  //     };

  //     // Middleware verification
  //     var middleware = toState.middleware;
  //     var auth = Cookies.getObject('auth');
  //     var roles = Cookies.getObject('roles');

  //     if ( middleware ) {

  //       switch (middleware) {
  //         case 'auth':
  //           if ( !auth ) {
  //             redirectToLogin();
  //           }
  //           break;

  //         case  'admin':
  //           roleMiddleware(auth, roles, middleware);
  //           break;

  //         case 'user':
  //           if (auth) {
  //             State.transitionTo('welcome');
  //             event.preventDefault();
  //           }
  //           break;

  //         default:
  //           break;
  //       }

  //     }

  //   });

  //   // Event fired when the transition is complete
  //   RootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

  //     RootScope.toggleLoading(false);

  //     $('html, body').animate({
  //       scrollTop: $('body').offset().top
  //     }, 1000);

  //   });

  //   // Event fired when an error occurs during transition
  //   RootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {

  //     RootScope.toggleLoading(false);

  //   });

  // }])
