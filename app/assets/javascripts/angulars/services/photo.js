angular.module("ImageApp").factory('Photo', ["$http", function ($http) {
  var photo_obj = {
    photo_datas: []
  };
    photo_obj.getAll = function(){
      return $http.get("/photos.json").success(function(data){
        angular.copy(data, photo_obj.photo_datas);
      });
    }

    photo_obj.create = function(value){
      return $http.post("galleries/1/photos.json", value).success(function(){
        if(!data.errors){
          photo_obj.photo_datas.unshift(data);
        }
      });
    }

    photo_obj.update = function(photo_attr){
      return $http.patch("photos/" + photo_attr.id + ".json", photo_attr).success(function(data){
        if(!data.errors){
          for(i =0 ; i < photo_obj.photo_datas.length; i++){
            if (photo_obj.photo_datas[i].id == data.id){
              photo_obj.photo_datas[i].name = data.name;
              photo_obj.photo_datas[i].path = data.path;
              break;
            }
          }  
        }
      });      
    }

    photo_obj.destroy = function(id){
      return $http.delete("photos/"+ id + ".json").success(function(){
        var new_arr = photo_obj.photo_datas.filter(function(val){
          return val["id"] !== id;
        });
        angular.copy(new_arr, photo_obj.photo_datas);
      });
    }
  return photo_obj;
}])
