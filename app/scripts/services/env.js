'use strict';

/**
 * @ngdoc service
 * @name warningcomFrontendApp.env
 * @description
 * # env
 * Constant in the warningcomFrontendApp.
 */

angular.module('warningcomFrontendApp')
  // Base url for using RESTful API
  .constant('BASE_URL', 'https://warningcom.herokuapp.com/api')
  // .constant('BASE_URL', 'http://0.0.0.0:3000/api')
  //.constant('SERVER_URL', 'https://educom-server.herokuapp.com')

  // Define jQuery element
  .constant('jQuery', angular.element)

  // Constants
  .constant('CKEDITOR', window.CKEDITOR)
  .constant('Async', window.async)
  .constant('_', window._)
  .constant('moment', window.moment)

  ;
