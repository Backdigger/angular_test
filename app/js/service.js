(function () {
    let app = angular.module('myApp');
    let filterEmpty = (record) => record.title;

    app.service('myDataService', ['$http', function ($http) {
        this.getData = () => $http.get('http://irden-workshop.info/api/notes')
            .then(
                success => success.data.filter(filterEmpty),
                error => console.warn('error', error)
        );
    }]);

})();
