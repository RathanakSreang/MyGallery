angular.module("ImageApp").controller("GalleryDetailController", ["$http","$scope", "$routeParams", function ($http, $scope, $routeParams) {  
  $scope.photos = [];
  $scope.gallery = "";
  $http.get("galleries/" + $routeParams.galleryId + ".json").success(function(data){
    $scope.datas =data;
    $scope.photos = data[0].photos;
    $scope.gallery = data[0].gallery;    
  });
}]);
