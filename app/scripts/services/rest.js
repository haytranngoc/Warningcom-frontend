'use strict';

/**
 * @ngdoc service
 * @name warningcomFrontendApp.rest
 * @description
 * # rest
 * Service in the warningcomFrontendApp.
 */

var Rest = function (BASE_URL, Http) {

  var self = this;

  /**
   * Response Data Template
   *   - data – {string|Object} – The response body transformed with the transform functions.
   *   - status – {number} – HTTP status code of the response.
   *   - headers – {function([headerName])} – Header getter function.
   *   - config – {Object} – The configuration object that was used to generate the request.
   *   - statusText – {string} – HTTP status text of the response.
   */

  self.get = function (url, config) {
    url = BASE_URL + correctUrl(url);
    return Http.get(url, config);
  };

  self.head = function (url, config) {
    url = BASE_URL + correctUrl(url);
    return Http.head(url, config);
  };

  self.post = function (url, data, config) {
    url = BASE_URL + correctUrl(url);
    return Http.post(url, data, config);
  };

  self.put = function (url, data, config) {
    url = BASE_URL + correctUrl(url);
    return Http.put(url, data, config);
  };

  self.delete = function (url, config) {
    url = BASE_URL + correctUrl(url);
    return Http.delete(url, config);
  };

  self.jsonp = function (url, config) {
    url = BASE_URL + correctUrl(url);
    return Http.jsonp(url, config);
  };

  self.patch = function (url, data, config) {
    url = BASE_URL + correctUrl(url);
    return Http.patch(url, data, config);
  };

  var correctUrl = function (url) {
    if (url.charAt(0) !== '/') {
      url = '/' + url;
    }
    return url;
  };


};

Rest.$inject = [
  'BASE_URL', '$http'
];

angular.module('warningcomFrontendApp')
  .service('Rest', Rest);

