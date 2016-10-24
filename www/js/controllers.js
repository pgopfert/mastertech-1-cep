angular.module('starter.controllers', [])

        .controller('SearchCtrl', function ($scope, $http, $ionicPopup, localStorageService) {
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

                        var history = localStorageService.get('history');

                        if (!history) {
                            history = [];
                        }

                        history.unshift($scope.address);

                        localStorageService.set('history', history);
                    }
                }, function () {
                    showError();
                });
            };

        })

        .controller('HistoryCtrl', function ($scope, $rootScope, localStorageService) {
            function init() {
                $scope.history = localStorageService.get('history');
            }
            
            $rootScope.$on('$stateChangeStart', init);
            
            init();
        });