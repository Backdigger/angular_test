angular.module('myApp', ['ngRoute'])
    .controller('customersCtrl', function (myDataService) {
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

    })

    .service('myDataService', ['$http', function ($http) {
        this.getData = () => $http.get('http://irden-workshop.info/api/notes').then((response) =>
            success => response.data,
            error => console.warn('error', error)
        );
    }])

    .component('notesList', {

        bindings: {
            notes: '='
        }
    })
    .component('notesItem', {
        template: ` <div ng-controller="customersCtrl" class="row"><div  ng-repeat="note in notes"
'style="background-color: {{note.color}}"
'class="col-xs-4 note-card"><div class="col-xs-12 title">{{note.title}}</div><div class="col-xs-12 value">{{note.value}}</div></div>
        </div>`,
        bindings: { note: '=' }

    });

