'use strict';

/**
 * @ngdoc function
 * @name warningcomFrontendApp.controller:WarningnewsCtrl
 * @description
 * # WarningnewsCtrl
 * Controller of the warningcomFrontendApp
 */


var WarningnewCtrl = function (Type, Post, Scope, State) {
	var self = this;
	self.types = [];
  self.currentType = {};

  // self.selectType = function (item) {
  //   var options = {
  //     params: {
  //       filter: {
  //         include: [
  //           'posts'
  //         ]
  //       }
  //     }
  //   };
  //   Type.posts(item.id, options)
  //     .then(function (posts) {
  //       var filtered = posts.map(function (item) {
  //         if (item.description.length > 150){
  //           item.description = item.description.substring(0, 147) + '...';
  //         }
  //         return item;
  //       });
  //       return filtered;
  //     }).then(function (posts) {
  //       self.posts = posts;
  //       self.currentType = item;
  //     });
  // };


};

WarningnewCtrl.$inject = [
	'Type', 'Post', '$scope', '$state'
];
angular.module('warningcomFrontendApp')
    .controller('WarningnewCtrl', WarningnewCtrl);
