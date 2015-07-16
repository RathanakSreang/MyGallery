describe('Route Test', function(){  
  var location, route, rootScope;
  beforeEach(
    module("ImageApp")
  );
  beforeEach(inject(function(_$location_, _$route_, _$rootScope_){
    location = _$location_;    
    route = _$route_;
    rootScope = _$rootScope_;
  }));
  describe('Root Path', function(){
    beforeEach(inject(function($httpBackend){
      $httpBackend.expectGET('templates/home.html').respond(200, 'main HTML');
    }));

    it('should load to home page on successful load of /', function(){
      location.path("/");
      rootScope.$digest();
      expect(route.current.controller).toBe('StatictController');
    });

    it('should redirect to root page when user type wrong url', function(){
      location.path("this/is/not/have/in/route");
      rootScope.$digest();
      expect(route.current.controller).toBe('StatictController');
    });
  });

  describe('help path', function(){
    beforeEach(inject(function($httpBackend){
      $httpBackend.expectGET('templates/help.html').respond(200);
    }));
    it('should load to help.html page when successful load of /help', function(){
      location.path('/help');
      rootScope.$digest();
      expect(route.current.controller).toBe('StatictController');
    });
  });
  describe('contact path', function(){
    beforeEach(inject(function($httpBackend){
      $httpBackend.expectGET('templates/contact.html').respond(200);
    }));
    it('should load to contact.html page when successful load of /contact', function(){
      location.path('/contact');
      rootScope.$digest();
      expect(route.current.controller).toBe('StatictController');
    });
  });
  describe('about path', function(){
    beforeEach(inject(function($httpBackend){
      $httpBackend.expectGET('templates/about.html').respond(200);
    }));
    it('should load to about.html page when successful load of /about', function(){
      location.path('/about');
      rootScope.$digest();
      expect(route.current.controller).toBe('StatictController');
    });
  });
  describe('Gallery index path', function(){
    var gallery;
    beforeEach(inject(function($q, Gallery, $httpBackend){
      gallery = Gallery;
      $httpBackend.expectGET('templates/gallery.html').respond(200);
      spyOn(Gallery, "getAll").and.callFake(function(data){
        var d =$q.defer();
        d.resolve([
          // {
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
          // },
          // {
          //   "id": 146,
          //   "title": "Helo",
          //   "created_at": "2015-07-16T07:12:47.000Z",
          //   "updated_at": "2015-07-16T07:12:47.000Z"
          // }
          ]);
      return d.promise;
      });
    }));
    it('should load gallery.html when successful load /galleries', function(){
      location.path('/galleries');
      rootScope.$digest();
      expect(route.current.controller).toBe('GalleryController');
    });
    // it('should query all galleries data when successful load /galleries', function(){
    //   location.path('/galleries');
    //   rootScope.$digest();
    //   console.log(rootScope);
    //   var scope = gallery.gallery_datas;
    //   console.log(scope);
    //   expect(route.current.controller).toBe('GalleryController');
    // });
  });
  
  describe('Gallery index path', function(){
    beforeEach(inject(function($httpBackend){
      $httpBackend.expectGET('templates/gallerydetails.html').respond(200);
    }));

    it('should load gallerydetails.html when successfull load /galleries/:galleryId', function(){
      location.path('/galleries/1');
      rootScope.$digest();
      expect(route.current.controller).toBe('GalleryDetailController');
    });
  });

  describe('user sign in path', function(){
    beforeEach(inject(function($httpBackend){
      $httpBackend.expectGET('templates/sign_in.html').respond(200);
    }));

    it('should load sign_in.html when successfull load /users/sign_in', function(){
      location.path('/users/sign_in');
      rootScope.$digest();
      expect(route.current.controller).toBe('signInController');
    });
  });

  describe('user sign up path', function(){
    beforeEach(inject(function($httpBackend){
      $httpBackend.expectGET('templates/sign_up.html').respond(200);
    }));

    it('should load sign_up.html when successfull load /users/sign_up', function(){
      location.path('/users/sign_up');
      rootScope.$digest();
      expect(route.current.controller).toBe('signUpController');
    });
  });

});
