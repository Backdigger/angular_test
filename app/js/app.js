    var app = angular.module('myApp', ['ngRoute']);

    function CustomersCtrl(myDataService) {
        myDataService.getData().then((resp) => {
            this.data = resp;
        });
    }

    app.controller('customersCtrl', CustomersCtrl)


    .config(function ($routeProvider) {
        $routeProvider
            .when('/notes', {
                templateUrl: 'app/tmpl/notes.html',
                controller: CustomersCtrl,
                controllerAs: 'ctrl'
            })
            .when('/about', {
                templateUrl: 'app/tmpl/about.html'
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

