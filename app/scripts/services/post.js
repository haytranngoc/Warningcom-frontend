'use strict';

/**
 * @ngdoc service
 * @name warningcomFrontendApp.post
 * @description
 * # post
 * Factory in the warningcomFrontendApp.
 */

var Post = function (Q ,Rest) {
  var exports = {};


  exports.all = function () {
    return Q (function (resolve, reject) {
      Rest.get('/posts')
        .then(function (res) {
          resolve(res.data);
        })
        .catch(function (error) {
          reject(error.data);
        });
    });
  };

  exports.delete = function(id){
    return Q(function(resolve,reject){
      Rest.delete('/posts/'+id)
        .then(function(res){
          resolve(res.data);
        })
        .catch(function(error){
          reject(error.data);
        });
    });
  };


};

Post.$inject = [ 
  '$q' , 'Rest'
];

angular.module('warningcomFrontendApp')
  .factory('Post',Post);
