// describe('Photo service', function(){
//   var scope, photo, galleryId;
//   beforeEach(module('ImageApp'));
//   beforeEach(inject(function(Photo, $rootScope){
//     scope = $rootScope.$new();
//     photo = Photo;
//   }));
//   beforeEach(function(){
//     galleryId = 1;
//     var temStr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
//                  " Voluptas labore, asperiores consequatur in temporibus velit" + 
//                  " ipsam molestias quisquam ducimus dignissimos esse minima" +
//                  " repellat, et eaque, quo nisi ea, tempore maxime!";
//     photo.photo_datas.push({"id": 1, "name": "Name 1", "description": temStr, "path":""});
//     photo.photo_datas.push({"id": 2, "name": "Name 2", "description": temStr, "path":""});
//     photo.photo_datas.push({"id": 3, "name": "Name 3", "description": temStr, "path":""});
//   });

//   describe('On function getAll()', function(){
//     var httpBackend;
//     beforeEach(inject(function($httpBackend){
//       httpBackend = $httpBackend;
//       $httpBackend.whenGET("galleries/"+ galleryId+ "/photos.json").respond(200, [
//          {
//           "id": "1",
//           "name": "Name 1",
//           "description": "Describe 1"
//          },
//          {
//           "id": "2",
//           "name": "Name 2",
//           "description": "Describe 2"
//          },
//          {
//           "id": "3",
//           "name": "Name 3",
//           "description": "Describe 3"
//          }
//       ]);
//     }));
//     it('should retrieve data from server and store on object', function(){
//       photo.getAll(galleryId);
//       scope.$digest();
//       httpBackend.flush();
//       expect(photo.photo_datas.length).toEqual(3);
//       expect(photo.photo_datas[0].name).toMatch(/Name 1/);
//     });
//   });

//   describe('function create', function(){
//     it('should save and add one more row at frond', inject(function($httpBackend){
//       $httpBackend.whenPOST("galleries/"+galleryId+"/photos.json").respond(200,
//         {
//           "id": "4",
//           "name": "Name 4",
//           "description" : "Desciption of Photo"
//         }
//       );
//       photo.create(galleryId);
//       scope.$digest();
//       $httpBackend.flush();
//       expect(photo.photo_datas.length).toEqual(4);
//       expect(photo.photo_datas[0].name).toMatch(/Name 4/);
//     }));
//     it('should not be able add data if create fail and data still same', inject(function($httpBackend){
//       $httpBackend.whenPOST("galleries/"+galleryId+"/photos.json").respond(404, {
//         "status": "404"
//       });
//       photo.create(galleryId);
//       scope.$digest();
//       $httpBackend.flush();
//       expect(photo.photo_datas.length).toEqual(3);
//       expect(photo.photo_datas[0].name).toMatch(/Name 1/);
//     }));
//   });
//   describe('function update', function(){
//     it('should update data in column specific', inject(function($httpBackend){
//       $httpBackend.whenPATCH("galleries/"+ galleryId +"/photos/1.json").respond(200, 
//         {
//          "id": "1",
//           "name": "After Update",
//           "description" : "After Update Desciption of Photo" 
//         });
//       photo.update(galleryId, photo.photo_datas[0]);
//       scope.$digest();      
//       $httpBackend.flush();
//       // console.log(photo.photo_datas[0]);
//       expect(photo.photo_datas[0].name).toMatch(/After Update/);
//       expect(photo.photo_datas[0].description).toMatch(/ Desciption of Photo/);
//     }));
//     it('should not be able update value in photo if update fail', inject(function($httpBackend){
//       $httpBackend.whenPATCH().respond(404, {
//         "status": "404"
//       });
//       photo.update(galleryId, photo.photo_datas[0]);
//       scope.$digest();      
//       $httpBackend.flush();
//       // console.log(photo.photo_datas[0]);
//       expect(photo.photo_datas[0].name).not.toMatch(/After Update/);
//       expect(photo.photo_datas[0].description).not.toMatch(/ Desciption of Photo/);
//     }));
//   });
//   describe('function delete', function(){
//     it('should remove one column after success delete', inject(function($httpBackend){
//       $httpBackend.whenDELETE("galleries/" + galleryId + "/photos/1.json").respond(200, {
//         "status": "200"
//       });
//       photo.destroy(galleryId, 1);
//       scope.$digest();
//       $httpBackend.flush();
//       expect(photo.photo_datas.length).toEqual(2);
//       expect(photo.photo_datas[0].name).not.toMatch(/Name 1/);
//       expect(photo.photo_datas[0].name).toMatch(/Name 2/);
//     }));
//     it('should not remove any field if delete not success', inject(function($httpBackend){
//       $httpBackend.whenDELETE("galleries/" + galleryId + "/photos/1.json").respond(500, {
//         "status": "500"
//       });
//       photo.destroy(galleryId, 1);
//       scope.$digest();
//       $httpBackend.flush();
//       expect(photo.photo_datas.length).toEqual(3);
//       expect(photo.photo_datas[0].name).toMatch(/Name 1/);      
//     }));
//   });
// });

