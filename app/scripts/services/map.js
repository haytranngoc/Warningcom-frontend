'use strict';

/**
 * @ngdoc service
 * @name warningcomFrontendApp.map
 * @description
 * # map
 * Factory in the warningcomFrontendApp.
 */

var Map = function (GOOGLE_API_KEY, Http, Q) {
  return function (selector, latlng) {
    var exports = {};
    exports.map = undefined;
    exports.Search = function (query) {
      return Q(function (resolve, reject) {
        var url = "https://maps.googleapis.com/maps/api/place/search/json";
        var params = {
          key: GOOGLE_API_KEY,
          query: query
        };
        Http.get(url, {
          params: params
        })
          .then(function (res) {
            resolve(res.data);
          })
          .catch(function (error) {
            reject(error.data);
          })
      });
    };

    exports.init = function () {
      if (latlng === undefined) {
        latlng = {
          lat: -34.397,
          lng: 150.644
        };
      }
      exports.map = new google.maps.Map(document.getElementById(selector), {
        center: latlng,
        scrollwheel: false,
        zoom: 5
      });
    };
    exports.init();
    return exports;
  };
};

Map.$inject = [
  "GOOGLE_API_KEY", "$http", "$q"
];

angular.module('warningcomFrontendApp')
  .factory('Map', Map);