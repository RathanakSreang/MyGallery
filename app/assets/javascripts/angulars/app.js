myApp = angular.module("ImageApp", ["ngAnimate","ngRoute", "ngResource", "Devise"]);
// myApp.config(['$httpProvider', function ($httpProvider) {
//   var authToken = $("meta[name=\"csrf-token\"]").attr("content");
//   return $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken;
// }]);

myApp.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
  $routeProvider
  .when("/", {
    templateUrl: "templates/home.html",
    controller: "StatictController"
  })
  .when("/help", {
    templateUrl: "templates/help.html",
    controller: "StatictController"
  })
  .when("/about", {
    templateUrl: "templates/about.html",
    controller: "StatictController"
  })
  .when("/contact", {
    templateUrl: "templates/contact.html",
    controller: "StatictController"
  })
  .when(
    "/galleries", {    
    templateUrl: "templates/gallery.html",
    controller: "GalleryController",
    resolve: {
      postPromise: ["Gallery", function(Gallery){
        return Gallery.getAll();
      }]
    }
  })
  .when("/galleries/:galleryId", {
    templateUrl: "templates/gallerydetails.html",
    controller: "GalleryDetailController"
  })
  .when("/users/sign_in", {
    templateUrl: "templates/sign_in.html",
    controller: "SignInController"
  })
  .when("/users/sign_up", {
    templateUrl: "templates/sign_up.html",
    controller: "SignUpController"
  })
  .otherwise({ redirectTo: '/' });  
});
