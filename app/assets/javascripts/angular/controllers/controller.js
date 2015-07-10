var galleryControllers = angular.module("appgalleryControllers", []);

galleryControllers.controller("GalleryController", ["$scope", "$http", function ($scope, $http) {
 $http.get("galleries.json").success(function(data){
  $scope.galleries =data;
  // $scope.artistOrder = "name";
 });
}]);

galleryControllers.controller("GalleryDetailController", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
 // $http.get("lib/data.json").success(function(data){
 //  $scope.artists =data;
 //  $scope.whichItem = $routeParams.itemId;

 //  if($routeParams.itemId > 0) {
 //    $scope.prevItem = Number($routeParams.itemId) -1;
 //  }else{
 //    $scope.prevItem = $scope.artists.length -1;
 //  }

 //  if($routeParams.itemId < $scope.artists.length -1) {
 //    $scope.nextItem = Number($routeParams.itemId) +1;
 //  }else{
 //    $scope.nextItem = 0;
 //  }
 // });
}]);

