'use strict';

/**
 * @ngdoc overview
 * @name warningcomFrontendApp
 * @description
 * # warningcomFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('warningcomFrontendApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])

  .config(['$locationProvider', function (LocationProvider) {

    // LocationProvider.html5Mode(true);

  }])

  // Configuring Default Header
  .run(['$cookies', '$http', function (Cookies, Http) {

    var auth = Cookies.getObject('auth');

    if (auth) {
      Http.defaults.headers.common.Authorization = auth.id;
    }

  }])

  .run(['$cookies', '$rootScope', function (Cookies, RootScope) {

    RootScope.auth = Cookies.getObject("auth");

    RootScope.toggleLoading = function (enable) {
      RootScope.isLoading = enable;
    };

  }])

  ;

