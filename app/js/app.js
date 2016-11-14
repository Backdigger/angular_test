angular.module('myApp', [])
    .controller('customersCtrl', function ($scope, $http) {
        $http.get("http://irden-workshop.info/api/notes").then(function (response) {
            $scope.myData = response.data;
        });
    })


    .directive('myNotes', function () {
        return {
            templateUrl: 'tmpl/directiveNotes.html'
        }
    });


