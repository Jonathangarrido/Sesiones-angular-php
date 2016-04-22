'use strict';
angular.module('miAdmin', [])

.component('miAdmin',{
  
  templateUrl: './js/components/mi-session/mi-admin/mi-admin.html',
  
  controller: function(milogin) {
    var vm = this;
    
    vm.txt = 'Page Admin';

    vm.logout = function(){
      milogin.logout();
    }

  }
  
});
