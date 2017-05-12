'use strict';

/**
 * @ngdoc function
 * @name warningcomFrontendApp.controller:AuthLoginCtrl
 * @description
 * # AuthLoginCtrl
 * Controller of the warningcomFrontendApp
 */

var LoginCtrl = function (Auth, Account, Cookies, Http, RootScope, Scope, State, StateParams) {

  var self = this;

  self.errors = {};
  self.loading = false;

  self.credential = {
    email: '',
    password: ''
  };

  self.submit = function () {

    self.loading = true;
    self.errors = {};

    var payload = self.credential;
    Auth.login(payload)
      .then(function (auth) {

        //Toastr.success("Login Success", "Congratulation!");
        self.credential = {};
        return auth;

      })
      .then(function (auth) {

        // Set default header
        Http.defaults.headers.common.Authorization = auth.id;

        Account.roles(auth.userId)
          .then(function (roles) {

            Cookies.putObject('roles', roles);

            // Set auth header object
            Auth.setAuthCookie(auth);

            RootScope.auth = auth;

            if (StateParams.redirect) {
              State.go(StateParams.redirect.name);
            } else {
              State.go('index');
            }

          });

        return auth;
      })
      .catch(function (error) {
        self.errors = error;
      })
      .finally(function () {
        self.loading = false;
      });
  };

  self.init = function () {

    var email = StateParams.email;

    if (email) {
      self.credential.email = email;
    }

  };
  self.init();

};

LoginCtrl.$inject = [
  'Auth','Account','$cookies', '$http', '$rootScope', '$scope', '$state', '$stateParams'
];

angular.module('warningcomFrontendApp')
  .controller('LoginCtrl', LoginCtrl);