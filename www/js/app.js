// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

//var xhReq = new XMLHttpRequest();
//xhReq.open("GET", "http://apisampah.kodesoft.co.id/mobilecsrf", false);
//xhReq.send(null);

angular.module('tcc', ['ionic', 'tcc.controllers'])
    .constant("CSRF_TOKEN", '<?php echo csrf_token(); ?>')
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })


    //.config(function ($httpProvider) {
    //    $httpProvider.defaults.headers.post = {
    //        "X-Requested-With": "XMLHttpRequest",
    //        'Content-Type': 'application/x-www-form-urlencoded',
    //        'X-XSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //    };
    //    $httpProvider.defaults.headers.put = {
    //        "X-Requested-With": "XMLHttpRequest",
    //        'Content-Type': 'application/x-www-form-urlencoded',
    //        'X-XSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //    };
    //    $httpProvider.defaults.headers.get = {
    //        "X-Requested-With": "XMLHttpRequest",
    //        'Content-Type': 'application/x-www-form-urlencoded'
    //    };
    //    $httpProvider.defaults.headers.delete = {
    //        "X-Requested-With": "XMLHttpRequest",
    //        'Content-Type': 'application/x-www-form-urlencoded',
    //        'X-XSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //    };
    //})


    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.about', {
                url: '/about',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/tentang.html'
                    }
                }
            })
            .state('app.laporan', {
                url: '/laporan',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/laporan.html',
                        controller: 'LaporanCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/laporan');
    });
