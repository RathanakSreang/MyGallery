describe('GalleryController', function(){
  var scope, controller;
  beforeEach(module("ImageApp"));
  
  beforeEach(inject(function($controller, $rootScope, $routeParams){    
    scope = $rootScope.$new();
    $routeParams.galleryId = 1;
    controller = $controller("GalleryDetailController", {$scope: scope, $routeParams: $routeParams});
  }));
  it('should define photos', function(){
    expect(scope.photos).toBeDefined();
  });
  it('should define gallery', function(){
    expect(scope.gallery).toBeDefined();
  });

  it('should display all photo and gallery in specific gallery', inject(function($http){    
    // scope.$digest();
    // scope.show();
    // console.log(scope);
    // expect(scope.photos.length).toBe();
  }));
});
