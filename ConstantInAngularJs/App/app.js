(function () {
    'use strict';

    angular
        .module('app', [
        // Angular modules
        'ngAnimate',
        'ngRoute'

        // Custom modules

        // 3rd Party Modules

        ])
        .constant('userRole', {
            owner: 'Owner',
            administrator: 'Administrator',
            user: 'User'
        })
        .controller('MainCtrl', function (userRole) {
            // Do something with myConfig...   
            var vm = this;
            vm.Role = userRole.administrator;                        
        });
})();
