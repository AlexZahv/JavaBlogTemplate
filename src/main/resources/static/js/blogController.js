app.controller('blogController', function ($scope,$http) {
    $http.get("test")
        .then(function(response) {
            $scope.articles= response.data;
        });
});