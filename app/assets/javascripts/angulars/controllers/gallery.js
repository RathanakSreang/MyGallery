angular.module("ImageApp").controller("GalleryController", [ "$scope", "Gallery", function ( $scope, Gallery) {
  $scope.galleries = []
  $scope.galleries = Gallery.gallery_datas;
  $scope.gallery = {
    id: "",
    title: ""
  }
  $scope.edit = false;

  $scope.cancel = function(){
    $scope.gallery.title = "";
    $scope.edit = false;
    $scope.gallery.id = "";    
    if($scope.myCreateForm) $scope.myCreateForm.$setPristine();
    if ($scope.myForm) $scope.myForm.$setPristine();
  }

  $scope.create = function(){
    Gallery.create({title: $scope.gallery.title});
    $scope.gallery.title = "";
    if ($scope.myCreateForm) $scope.myCreateForm.$setPristine();
  };

  $scope.deletegallery = function(id) {    
    Gallery.destroy(id);    
  };
  
  $scope.update = function(){
    Gallery.update({id: $scope.gallery.id, title: $scope.gallery.title});
    $scope.gallery.title = "";
    $scope.edit = false;
    $scope.gallery.id = "";
    if ($scope.myCreateForm) $scope.myCreateForm.$setPristine();
    if ($scope.myForm) $scope.myForm.$setPristine();
  }

  $scope.editgallery = function(gallery) {
    $scope.edit = true;
    $scope.gallery.title = gallery["title"];
    $scope.gallery.id = gallery["id"];
  }
}]); 
