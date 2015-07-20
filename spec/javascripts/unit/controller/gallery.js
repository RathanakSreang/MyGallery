describe('GalleryController', function(){
  var scope, controller, gallery;
  beforeEach(
    module("ImageApp")
  );
  beforeEach(inject(function($controller, $rootScope, Gallery){
        
    gallery = Gallery;
    scope = $rootScope.$new();
    controller = $controller("GalleryController", {$scope: scope, Gallery: gallery});    
    scope.$digest();
  }));
  it('should define scope.gallery', function(){
    expect(scope.gallery).toBeDefined();
  });
  it('should define scope.galleries', function(){
    expect(scope.galleries).toBeDefined();
  });
  it('should define scope.galleries', function(){
    expect(scope.edit).toBe(false);
  });
  // it('should bind scope.galleries with Gallery.gallery_datas', function(){
  //   console.log(gallery.gallery_datas);
  //   gallery.gallery_datas = [{
  //   "id": 148,
  //   "title": "sss",
  //   "created_at": "2015-07-20T01:20:10.000Z",
  //   "updated_at": "2015-07-20T01:20:10.000Z"
  // },
  // {
  //   "id": 147,
  //   "title": "Hello",
  //   "created_at": "2015-07-16T07:12:51.000Z",
  //   "updated_at": "2015-07-16T07:12:51.000Z"
  // }];   
  // scope.$digest(); 
  // console.log(scope.galleries);  
  // expect(scope.galleries).toEqual(gallery.gallery_datas);
  // });
  
  it('should reset from to where it was when function cancel was trigger', function(){  
    scope.cancel();
    expect(scope.gallery.title).toEqual("");
    expect(scope.edit).toBe(false);
    expect(scope.gallery.id).toEqual("");
  });
  it('should assign value to gallery for form edit when editgallery wasn trigger', function(){
    scope.editgallery({"id": 1, "title": "This is It"});
    expect(scope.edit).toBe(true);
    expect(scope.gallery.title).toEqual("This is It");
    expect(scope.gallery.id).toEqual(1);
  });

  it('should add one gallery when user successful create gallery', inject(function($q){
    spyOn(gallery, "create").and.callFake(function(data){
      var datas = this.gallery_datas;
      var d = $q.defer();
      d.resolve({"id": 1, "title": "Save Title"})
      return d.promise.then(function(data) {
        datas.unshift(data);
      });
    });    
    scope.create();
    scope.$digest();
    expect(scope.galleries.length).toBe(1);
  }));

  it('should not able to add any gallery when user fail create gallery', inject(function($q){
    spyOn(gallery, "create").and.callFake(function(data){      
      var d = $q.defer();
      d.reject({"errors": "Some thing wrong"});
      return d.promise;
    });    
    scope.create();
    scope.$digest();
    expect(scope.galleries.length).toBe(0);
  }));

  it('should update gallery when user successful update gallery', inject(function($q){
    spyOn(gallery, "update").and.callFake(function(data){
      var datas = this.gallery_datas;
      var d = $q.defer();
      d.resolve({"id": 1, "title": "After Update Title"})
      return d.promise.then(function(data) {
        for(i =0 ; i < datas.length; i++){
          if (datas[i].id == data.id){
            datas[i].title = data.title;
            break;
          }
        }
      });
    });
    scope.galleries.push({"id": 1,"title":"Before Update Title"});
    scope.update();
    scope.$digest();
    expect(scope.galleries[0].title).toEqual("After Update Title");
  }));

  it('should not able to update gallery when user fail update gallery', inject(function($q){
    spyOn(gallery, "update").and.callFake(function(data){      
      var d = $q.defer();
      d.reject({"errors": "Some thing wrong"});
      return d.promise;
    });
    scope.galleries.push({"id": 1,"title":"Before Update Title"});
    scope.update();
    scope.$digest();
    expect(scope.galleries[0].title).toEqual("Before Update Title");
  }));

  it('should delete one gallery when user successful destroy gallery', inject(function($q){
    spyOn(gallery, "destroy").and.callFake(function(data){
      var datas = this.gallery_datas;
      var d = $q.defer();
      d.resolve({"status": "Success delete"});
      return d.promise.then(function(data) {
        var new_arr = datas.filter(function(val){
        return val["id"] !== 1;
        });
        angular.copy(new_arr, datas);
      });
    });
    scope.galleries.push({"id": 1,"title":"Before Update Title"});
    scope.deletegallery();
    scope.$digest();
    expect(scope.galleries.length).toBe(0);
  }));

  it('should not able to delete any gallery when user fail destroy gallery', inject(function($q){
    spyOn(gallery, "destroy").and.callFake(function(data){      
      var d = $q.defer();
      d.reject({"errors": "Some thing wrong"});
      return d.promise;
    });
    scope.galleries.push({"id": 1,"title":"Before Update Title"});
    scope.deletegallery();
    scope.$digest();
    expect(scope.galleries.length).toBe(1);
  }));  
});
