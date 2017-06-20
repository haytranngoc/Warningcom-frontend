'use strict';

/**
 * @ngdoc service
 * @name warningcomFrontendApp.type
 * @description
 * # type
 * Service in the warningcomFrontendApp.
 */
var Type = function (Q, Rest) {
  var exports = {};

  exports.one = function (id, options) {
    return Q(function (resolve, reject) {
      Rest.get('/types/' + id, options)
        .then(function (res) { resolve(res.data); })
        .catch(function (err) { reject(err.data); });
    });
  };

  exports.all = function (options) {
    return Q(function (resolve, reject) {
      Rest.get('/types', options)
        .then(function (res) { resolve(res.data); })
        .catch(function (error) { reject(error.data); });
    });
  };

  exports.posts = function (id, options) {
    return Q(function (resolve, reject) {
      Rest.get('/types/' + id + '/posts', options)
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

Type.$inject = [
  '$q', 'Rest'
];

angular.module('warningcomFrontendApp')
  .factory('Type', Type);
