angular.module("ImageApp").factory('Photo', ["$http", function ($http) {
  var photo_obj = {
    photo_datas: []
  };
    photo_obj.getAll = function(galleryId){
      return $http.get("galleries/" + galleryId + "/photos.json").success(function(data){
        angular.copy(data, photo_obj.photo_datas);
      });
    }    
    photo_obj.create = function(gallery_id, value){
      return $http.post("galleries/" + gallery_id + "/photos.json", value, {
        transformRequest: function(data) {
          // console.log(value);
          if (data === undefined)
          return data;

          var fd = new FormData();
          angular.forEach(data, function(value, key) {
            if (value instanceof FileList) {
              if (value.length == 1) {
                fd.append(key, value[0]);
              } else {
                angular.forEach(value, function(file, index) {
                  fd.append(key + '_' + index, file);
                });
              }
            } else {
              fd.append(key, value);
            }
          });

          return fd;
        },
        headers: {
          'Content-Type': undefined
        }
      }).success(function(data){
        if(!data.errors){
          photo_obj.photo_datas.unshift(data);
        }
      });
    }

    photo_obj.update = function(gallery_id, value){
      console.log("dddddddddddddddddddddd");
      return $http.patch("galleries/"+ gallery_id +"/photos/" + value.id + ".json", value, {
        transformRequest: function(data) {
          // console.log(data);
          if (data === undefined)
          return data;

          var fd = new FormData();
          angular.forEach(data, function(value, key) {
            if (value instanceof FileList) {
              if (value.length == 1) {
                fd.append(key, value[0]);
              } else {
                angular.forEach(value, function(file, index) {
                  fd.append(key + '_' + index, file);
                });
              }
            } else {
              fd.append(key, value);
            }
          });

          return fd;
        },
        headers: {
          'Content-Type': undefined
        }
      }).success(function(data){
        if(!data.errors){
          for(i =0 ; i < photo_obj.photo_datas.length; i++){
            if (photo_obj.photo_datas[i].id == data.id){
              photo_obj.photo_datas[i].name = data.name;
              photo_obj.photo_datas[i].path = data.path;
              photo_obj.photo_datas[i].description = data.description;
              break;
            }
          }  
        }
      });      
    }

    photo_obj.destroy = function(gallery_id, id){
      return $http.delete("galleries/"+ gallery_id + "/photos/"+ id + ".json").success(function(){
        var new_arr = photo_obj.photo_datas.filter(function(val){
          return val["id"] !== id;
        });
        angular.copy(new_arr, photo_obj.photo_datas);
      });
    }
  return photo_obj;
}])
