angular.module("ImageApp").controller("GalleryDetailController", ["$http","$scope", "$routeParams", "Photo", function ($http, $scope, $routeParams, Photo) {  
  $scope.photos = [];
  $scope.gallery = "";
  $scope.photo = {
    name: '',
    image: ''
  };
  $http.get("galleries/" + $routeParams.galleryId + ".json").success(function(data){
    $scope.datas =data;
    $scope.photos = data[0].photos;
    $scope.gallery = data[0].gallery;    
  });

  $scope.create = function(){
    Photo.create({path: $scope.photo.path, name: $scope.photo.name});
    $scope.reset();
  }

  $scope.reset = function(){
    $scope.photo.name = '';
    $scope.photo.image = '';
    if($scope.myCreateForm)$scope.myCreateForm.$setPristine();
  }
}]);
