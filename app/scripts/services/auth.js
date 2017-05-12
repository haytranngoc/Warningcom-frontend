'use strict';

/**
 * @ngdoc service
 * @name warningcomFrontendApp.auth
 * @description
 * # auth
 * Service in the warningcomFrontendApp.
 */


var Auth = function (Cookies, Q, Rest) {
  var exports = {};

  exports.login = function (credential) {
    return Q(function (resolve, reject) {
      Rest.post('/accounts/login', credential)
        .then(function (res) { resolve(res.data); })
        .catch(function (error) { reject(error.data); });
    });
  };

  exports.logout = function () {
    return Q(function (resolve, reject) {
      Rest.post('/accounts/logout')
        .then(function (res) { resolve(res.data); })
        .catch(function (error) { reject(error.data); });
    });
  };

  exports.setAuthCookie = function (auth) {

    // Expiration Time
    var expirationTime = (new Date().getTime() + auth.ttl);

    Cookies.putObject('auth', auth);

  };

  return exports;
};

Auth.$inject = [
  '$cookies', '$q', 'Rest'
];

angular.module('warningcomFrontendApp')
  .factory('Auth', Auth);
