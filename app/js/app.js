/*global angular*/

var app = angular.module("jagaWebDevTemplate", ["ngRoute"])
                .config(["$routeProvider", function ($routeProvider) {
                  $routeProvider
                    .when("/about",
                    {
                        templateUrl: "templates/about.html"
                    })
                    .when("/resume",
                    {
                        templateUrl: "templates/resume.html"
                    })
                    .when("/work",
                    {
                        templateUrl: "templates/work.html"
                    })
                    .when("/experiments",
                    {
                        templateUrl: "templates/experiments.html"
                    })
                    .when("/contact",
                    {
                        templateUrl: "templates/contact.html"
                    })
                    .otherwise({redirectTo: "/about"});
}]);