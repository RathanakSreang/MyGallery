angular.module("ImageApp").controller("GalleryDetailController", ["$http","$scope", "$routeParams", "Photo", "Gallery", function ($http, $scope, $routeParams, Photo, Gallery) {    
  $scope.gallery_id = $routeParams.galleryId;
  Photo.getAll($scope.gallery_id);

  $scope.photos = Photo.photo_datas;    
  Gallery.show($scope.gallery_id).success(function(data){
    $scope.gallery = data;
  });
  
  $scope.edit = false;
  $scope.photo = {
    id: '',
    name: '',
    path: '',
    description: ''
  };
  $scope.test = function(elem) {
    $scope.photo.path = elem.files;
  } 

  $scope.create = function(){
    Photo.create($scope.gallery_id, $scope.photo).success(function(){
      $scope.reset();
    });    
  }

  $scope.deletephoto = function(id){
    Photo.destroy($scope.gallery_id, id);
  }

  $scope.reset = function(){
    $scope.photo.name = '';    
    $scope.photo.path = null;
    $scope.photo.description = '';
    if($scope.myCreateForm)$scope.myCreateForm.$setPristine();
    if($scope.myUpdateForm)$scope.myUpdateForm.$setPristine();
    $scope.edit = false;
  }

  $scope.editphoto = function(photo) {
    $scope.edit = true;
    console.log("POath"+ photo.path.url);
    $scope.photo.name = photo["name"];
    $scope.photo.description = photo["description"];
    $scope.photo.id = photo["id"];
  }

  $scope.update = function(){
    // console.log($scope.photo);
    Photo.update($scope.gallery_id, $scope.photo);
    // console.log($scope.photo);
    $scope.reset();    
  }

  $scope.show = function(photo) {
    // console.log($scope.photos.indexOf(photo));
    $scope.show_photo = photo;
  }
  $scope.cancel = function(){
    $scope.reset();
  }
  $scope.next = function(photo){
    // console.log($scope.photos[0]);
    var index = $scope.photos.indexOf(photo);
    index = index + 1;
    if($scope.photos.length <= index ) index =0;
    $scope.show_photo = $scope.photos[index];
  }

  $scope.previous =  function(photo){
    var index = $scope.photos.indexOf(photo);
    index = index - 1;
    if(index < 0) index =$scope.photos.length -1;
    $scope.show_photo = $scope.photos[index];
  }
}]);
