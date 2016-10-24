angular.module('starter.controllers', [])

        .controller('SearchCtrl', function ($scope, $http) {
            $scope.form = {};


            $scope.search = function(){
                $http({
                    method: 'GET',
                    url: 'http://viacep.com.br/ws/' + $scope.form.cep + '/json/'
                }).then(function (response) {
                    $scope.address = response.data;
                }, function (response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            };

        })

        .controller('HistoryCtrl', function ($scope) {

        });