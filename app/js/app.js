angular.module('myApp', ["ngRoute"])
    .controller('customersCtrl', function ($scope, myDataService) {
        myDataService.getData().then(function (resp) {
            $scope.data = resp;
        });

    })


    .config(function ($routeProvider) {
        $routeProvider
            .when("/notes", {
                templateUrl: "app/tmpl/notes-list.html"
            })
            .when("/about", {
                templateUrl: "app/tmpl/directiveAbout.html"
            })

    })


    .service('myDataService', function ($http) {
        return {
            getData: function () {
                var promise1 = $http.get('http://irden-workshop.info/api/notes').then(function (response) {
                    return response.data;
                });
                return promise1;
            }
        };
    })

    .component("notesList", {

        bindings: {
            item: '= notesItem'

        }
    })
    .component("notesItem", {
        template: ' <div ng-controller="customersCtrl" class="row"><div  ng-repeat="card in data"  ' +
'style="background-color: {{card.color}}" ' +
'class="col-xs-4 note-card"><div class="col-xs-12 title">{{card.title}}</div><div class="col-xs-12 value">{{card.value}}</div></div>'+
        '</div>',
        bindings: {

        }

    });


// controller: function FsListViewComponent() {
//
//
//     function selectedListItem(item) {
//         this.$selectedItem = item;
//     }
//
//     function selectItem(item) {
//         
//         this.onSelect({
//             selectedItem: item
//         });
//     }
//
//
// }