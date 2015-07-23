describe('Service Gallery', function(){  
  var scope, gallery;
  beforeEach(module("ImageApp"));
  beforeEach(inject(function(Gallery, $rootScope){
    gallery = Gallery;
    scope = $rootScope.$new();
  }));

  beforeEach(function(){
    gallery.gallery_datas.push({"id": 1, "title": "Title 1"});
    gallery.gallery_datas.push({"id": 2, "title": "Title 2"});
    gallery.gallery_datas.push({"id": 3, "title": "Title 3"});
  });
  describe('get all methods', function(){
    var httpBackend;
    beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend;
       $httpBackend.whenGET("/galleries.json").respond(200,[
        {
          "id": 134,
          "title": "rrrrrrr",
          "created_at": "2015-07-21T01:31:58.000Z",
          "updated_at": "2015-07-21T01:31:58.000Z"
        },
        {
          "id": 133,
          "title": "ssssssss",
          "created_at": "2015-07-21T01:31:54.000Z",
          "updated_at": "2015-07-21T01:31:54.000Z"
        },
        {
          "id": 132,
          "title": "ssssss",
          "created_at": "2015-07-21T01:31:51.000Z",
          "updated_at": "2015-07-21T01:31:51.000Z"
        }
        ]);
    }));
    it('should get all data form server', function(){
      gallery.getAll();
      scope.$digest();
      httpBackend.flush();
      expect(gallery.gallery_datas.length).toBe(3);
    });
  });

  describe('function create', function(){
    it('should save and add one more row', inject(function($httpBackend){
      $httpBackend.whenPOST("/galleries.json").respond(200,
        {
          "id": 134,
          "title": "rrrrrrr",
          "created_at": "2015-07-21T01:31:58.000Z",
          "updated_at": "2015-07-21T01:31:58.000Z"
        }
      );
      gallery.create({"title": "The 4 Title"});
      scope.$digest();
      $httpBackend.flush();
      expect(gallery.gallery_datas.length).toBe(4);
    }));
    it('should not be able to save and or add any data', inject(function($httpBackend){
      $httpBackend.whenPOST("/galleries.json").respond(404,
        {
          "error": "Something wrong"
        }
      );
      gallery.create({"title": "Before Create"});
      scope.$digest();
      $httpBackend.flush();
      expect(gallery.gallery_datas.length).toBe(3);
    }));
  });

  describe('function update', function(){
    it('should update data in colomn', inject(function($httpBackend){
      $httpBackend.whenPATCH("galleries/1.json").respond(200,
        {
          "id": 1,
          "title": "After Update",
          "created_at": "2015-07-21T01:31:58.000Z",
          "updated_at": "2015-07-21T01:31:58.000Z"
        }
      );
      gallery.gallery_datas.push({"id": 1, "title": "Before Update"})
      gallery.update(gallery.gallery_datas[0]);
      scope.$digest();
      $httpBackend.flush();
      expect(gallery.gallery_datas[0].title).toBe("After Update");
    }));
    it('should not able to update data in colomn', inject(function($httpBackend){
      $httpBackend.whenPATCH("galleries/1.json").respond(404,
        {
          "error": "Something wrong"
        }
      );
      gallery.gallery_datas.push({"id": 1, "title": "Update Update Title 1"})
      gallery.update(gallery.gallery_datas[0]);
      scope.$digest();
      $httpBackend.flush();
      expect(gallery.gallery_datas[0].title).toBe("Title 1");
    }));    
  });

  describe('function delete', function(){
    it('should delete one row if successful delete', inject(function($httpBackend){
      $httpBackend.whenDELETE("galleries/1.json").respond(200,
        {
          "success": "Delete success"
        }
      );      
      gallery.destroy(1);
      scope.$digest();
      $httpBackend.flush();
      expect(gallery.gallery_datas.length).toBe(2);
    }));
    it('should delete one row if successful delete', inject(function($httpBackend){
      $httpBackend.whenDELETE("galleries/1.json").respond(404,
        {
          "error": "Delete fail"
        }
      );      
      gallery.destroy(1);
      scope.$digest();
      $httpBackend.flush();
      expect(gallery.gallery_datas.length).toBe(3);
    }));
  });
});
