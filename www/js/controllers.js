angular.module('starter.controllers', [])

        .controller('SearchCtrl', function ($scope, $http, $ionicPopup) {
            $scope.form = {};

            function showError() {
                $ionicPopup.alert({
                    template: 'CEP Inválido!'
                });
            }

            $scope.search = function () {
                $http({
                    method: 'GET',
                    url: 'http://viacep.com.br/ws/' + $scope.form.cep + '/json/'
                }).then(function (response) {
                    if (response.data.erro) {
                        showError();
                    } else {
                        $scope.address = response.data;
                    }
                }, function () {
                    showError();
                });
            };

        })

        .controller('HistoryCtrl', function ($scope) {

        });