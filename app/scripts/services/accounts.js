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

  exports.me = function () {
    return Q(function (resolve, reject) {
      var auth = Cookies.getObject('auth');
      var filter, options;
      if (auth) {
        var id = auth.userId;

        filter = {
          include: [
            /*"gender", */"roles"
          ]
        };

        options = {
          params: { filter: filter }
        };

        Rest.get('/accounts/' + id, options)
          .then(function (res) {
            resolve(res.data);
          })
          .catch(function (error) {
            reject(error.data);
          });
      } else {
        reject();
      }
    });
  };

  exports.one = function (id, options) {
    return Q (function (resolve, reject) {
      Rest.get('/accounts/' + id, options)
        .then(function (res) {
          resolve(res.data);
        })
        .catch(function (error) {
          reject(error.data);
        });
    });
  };

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

  exports.create = function (payload) {
    return Q(function (resolve, reject) {
      Rest.post('/accounts', payload)
        .then(function (res) { resolve(res.data); })
        .catch(function (error) { reject(error.data); });
    });
  };

  return exports;
};

Account.$inject = [
  '$cookies',  '$q', 'Rest'
];

angular.module('warningcomFrontendApp')
  .factory('Account', Account);
