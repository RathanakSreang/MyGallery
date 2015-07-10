var myApp = angular.module("ImageApp", ["ngAnimate", "appgalleryControllers", "ngRoute"]);
myApp.config(function($routeProvider, $locationProvider){
  $routeProvider.when(
    "/galleries", {
    // url: "/galleries",
    templateUrl: "templates/gallery.html",
    controller: "GalleryController"
  });
  
  $locationProvider.html5Mode(true);
});

myApp.controller("validateCtrl", function ($scope) {
  $scope.user = {};
  // $scope.user.email ="ddddddddddd@ssssss";
  // $scope.user.password ="1234567890";  
  $scope.resetpassconfirm = function(){$scope.user.password_confirmation ="";}    
});
