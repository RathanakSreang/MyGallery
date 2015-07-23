describe('GalleryDetailController', function(){
  var scope, controller, httpBackend, photo;
  beforeEach(module("ImageApp"));
  
  beforeEach(inject(function($controller, $rootScope, $routeParams, Photo){
    scope = $rootScope.$new();
    $routeParams.galleryId = 1;
    photo = Photo;
    controller = $controller("GalleryDetailController", {$scope: scope, $routeParams: $routeParams, Photo: photo});
  }));
  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend;
    $httpBackend.whenGET("galleries/1/photos.json").respond(200, [
      {
        id: 1,
        name: "Photo 1",
        path: "path 1",
        description: "Desciption 1"
      },
      { 
        id: 2,
        name: "Photo 2",
        path: "path 2",
        description: "Desciption 2"
      },
      {
        id: 3,
        name: "Photo 3",
        path: "path 3",
        description: "Desciption 3"
      }]);
    $httpBackend.whenGET("galleries/1.json").respond(200, {
      title: "Kuku"
    });    
  })) 
  it('should define photos and photo', function(){
    scope.$digest();
    httpBackend.flush();
    expect(scope.photos).toBeDefined();
    expect(scope.photo).toBeDefined();
    console.log(scope.gallery.title);
    expect(scope.gallery).toBeDefined();
    expect(scope.gallery.title).toEqual("Kuku");
  });  

  it('should display all photo and gallery in specific gallery', inject(function($http){    
    scope.$digest();
    httpBackend.flush();    
    expect(scope.photos.length).toBe(3);
    expect(scope.gallery.title).toEqual("Kuku");
  }));

  it('should delete one photo when user successful destroy photo', inject(function($q){
    spyOn(photo, "destroy").and.callFake(function(data){
      var datas = this.photo_datas;
      var d = $q.defer();
      d.resolve({"status": "Success delete"});
      return d.promise.then(function(data) {
        var new_arr = datas.filter(function(val){
        return val["id"] !== 1;
        });
        angular.copy(new_arr, datas);
      });
    });
    scope.photos.push({id: 4,name:"Before Update Title", path: "/dddd/dddd", description: "This is my description"});
    scope.deletephoto();
    scope.$digest();
    httpBackend.flush();
    expect(scope.photos.length).toBe(3);
  }));

  it('should not able to delete any photo when user fail photo gallery', inject(function($q){
    spyOn(photo, "destroy").and.callFake(function(data){      
      var d = $q.defer();
      d.reject({"errors": "Some thing wrong"});
      return d.promise;
    });
    scope.photos.push({id: 4,name:"Before Update Title", path: "/dddd/dddd", description: "This is my description"});
    scope.deletephoto();
    scope.$digest();
    httpBackend.flush();
    expect(scope.photos.length).toBe(3);
  }));
});
