'use strict';

/**
 * @ngdoc function
 * @name warningcomFrontendApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the warningcomFrontendApp
 */

var MapCtrl = function(Map) {
  var self = this;
  self.init = function() {
    self.map = new Map("map", {
      lat: 16.0474325,
      lng: 108.1711342
    });
  };
  self.init();
};

MapCtrl.$inject = [
  "Map"
];

angular.module('warningcomFrontendApp')
  .controller('MapCtrl', MapCtrl);
