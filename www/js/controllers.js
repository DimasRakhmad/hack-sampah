angular.module('tcc.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});
    })

    .controller('LaporanCtrl', function ($scope, $http) {
        var xhr = $http({
            method: 'get',
            url: 'http://apisampah.kodesoft.co.id/api/v1/list-kelurahan'
            //headers: {'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest', }
        });
        xhr.success(function (data) {
            $scope.data = data;
        });
        $scope.input = {};
        //function to clear input
        $scope.clearInput = function () {
            $scope.input.nama = '';
            $scope.input.email = '';
            $scope.input.kelurahan_id = '';
            $scope.input.keluhan = '';
        };


        $scope.submit = function () {
            var link = 'http://apisampah.kodesoft.co.id/api/v1/pengaduan';

            $http.post(link,
                {
                    nama: $scope.input.nama,
                    email: $scope.input.email,
                    kelurahan_id: $scope.input.kelurahan_id.id,
                    keluhan: $scope.input.keluhan
                })
                .then(function (res) {
                    $scope.clearInput();
                    alert('Pengaduan Sudah Dikirim')
                });
        };


        //$scope.submit = function () {
        //    $http({
        //        method: 'post',
        //        url: 'http://apisampah.kodesoft.co.id/api/v1/pengaduan'
        //        //headers: {'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'XMLHttpRequest', }
        //    })
        //    ($scope.input)
        //        .success(function (data) {
        //        if (data.success == true) {
        //            console.log(data)
        //        }
        //    })
        //        .error(function (data) {
        //            console.log(data)
        //        });
        //}
    });
