var app = angular.module('javaBlog', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when("/blog", {
        controller: "blogController",
        templateUrl: "views/blog.html"
    });
    $routeProvider.when("/home", {
        templateUrl: "views/home.html"
    });
    $routeProvider.when("/news", {
        templateUrl: "views/news.html"
    });
    $routeProvider.when("/books", {
        templateUrl: "views/books.html"
    });
    $routeProvider.when("/about", {
        templateUrl: "views/about.html"
    });

    $routeProvider.otherwise({redirectTo: "/home"});

});















