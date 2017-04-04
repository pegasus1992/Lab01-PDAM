angular.module('app.controllers', [])

        .controller('inicioCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
                // Source code:
                /// https://www.genuitec.com/products/myeclipse/learning-center/mobile/mobile-app-ionic/
                /// http://ionicframework.com/docs/api/directive/ionList/
                /// http://stackoverflow.com/questions/32214519/how-to-add-remove-item-to-from-list-in-ionic

                $scope.personas = [{nombre: "Avuuna"}, {nombre: "Pegasusmax"}, {nombre: "Iguanodonte"}];

                $scope.data = {
                    showDelete: false
                };

                $scope.addPersona = function (name) {
                    if (name != null) {
                        $scope.personas.push({nombre: name});
                        $scope.nombre = "";
                    }
                };

                $scope.removePersona = function (index) {
                    $scope.personas.splice(index, 1);
                };
            }])

        .controller('perfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {
            }])

        .controller('edicionCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {
            }])

        .controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
            function ($scope, $stateParams) {
            }]);