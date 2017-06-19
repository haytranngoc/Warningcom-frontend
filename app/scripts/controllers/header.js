'use strict';

/**
 * @ngdoc function
 * @name warningcomFrontendApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the warningcomFrontendApp
 */
var HeaderCtrl = function (Auth, Cookies, Http, Account, RootScope, Scope, State) {

  var self = this;

  self.hiddenMenuVisibility = false;
  self.account = undefined;

  self.getAccount = function () {
    var auth = Cookies.getObject('auth');
    var user = Cookies.getObject('user');
    if (auth) {

      if (user) {
        self.account = user;
      } else {
        Account.me().then(function (account) {
          self.account = account;
          Cookies.putObject('user', account);
        });
      }
    }
  };

  self.logout = function () {
    Auth.logout()
      .then(function (res) {

        Cookies.remove('auth');
        Cookies.remove('roles');
        Cookies.remove('user');

        delete Http.defaults.headers.common["Authentication"];

        RootScope.auth = null;

        RootScope.$broadcast("user.logout");

        self.init();
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  self.init = function () {
    self.account = undefined;
    self.getAccount();
  };
  self.init();

};

HeaderCtrl.$inject = [
  'Auth', '$cookies', '$http', 'Account', '$rootScope', '$scope', '$state'
];

angular.module('warningcomFrontendApp')
  .controller('HeaderCtrl', HeaderCtrl);
