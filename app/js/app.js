    var app = angular.module('myApp', ['ngRoute']);

    app.controller('customersCtrl', function (myDataService) {
        myDataService.getData().then((resp) => {
            this.data = resp;
        });

    })


    .config(function ($routeProvider) {
        $routeProvider
            .when('/notes', {
                templateUrl: 'app/tmpl/notes-list.html'
            })
            .when('/about', {
                templateUrl: 'app/tmpl/directiveAbout.html'
            });

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

