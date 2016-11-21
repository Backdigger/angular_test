app.service('myDataService', ['$http', function ($http) {
    this.getData = () => $http.get('http://irden-workshop.info/api/notes').then((response) =>
        success => response.data,
        error => console.warn('error', error)
    );
}]);
