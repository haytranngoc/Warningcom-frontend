'use strict';

/**
 * @ngdoc service
 * @name warningcomFrontendApp.accounts
 * @description
 * # accounts
 * Service in the warningcomFrontendApp.
 */

 var Account = function (Cookies, Q, Rest) {
  var exports = {};

  exports.roles = function (id) {
    return Q(function (resolve, reject) {
      Rest.get('/accounts/' + id + '/roles')
      .then(function (res) {
        resolve(res.data);
      })
      .catch(function (error) {
        reject(error.data);
      });
    });
  };

  return exports;
};

Account.$inject = [
  '$cookies',  '$q', 'Rest'
];

angular.module('warningcomFrontendApp')
  .factory('Account', Account);
