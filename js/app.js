'use strict';
(function () {

  function config($routeProvider){
    $routeProvider
      .when('/login',{
        template: '<mi-login></mi-login>'
      })
      .when('/admin',{
        template: '<mi-admin></mi-admin>'
      })
      .otherwise({ reditrectTo : '/login' });
  }

  function Run($rootScope, $location,milogin){
    var routespermission=['/admin'];
    $rootScope.$on('$routeChangeStart',function(){
      if(routespermission.indexOf($location.path()) !=-1){
        var connected = milogin.islooged();
        connected.then(function(msg){
          if(!msg.data) $location.path('/login');
        })
      }
    });
  }

  angular
    .module('loginApp', [
      'ngRoute',
      'miLogin',
      'miAdmin',
      'loginService',
      'sessionService'
      ])
    .config(config)
    .run(Run)

})();