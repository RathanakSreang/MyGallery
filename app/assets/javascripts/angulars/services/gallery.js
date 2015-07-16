angular.module("ImageApp").factory("Gallery", ["$http", function ($http) {
  var gallery_obj={
    gallery_datas: []
  };
  gallery_obj.getAll = function(){
    console.log("I in Heeeeeeee");
    return $http.get("galleries.json").success(function(data){      
      angular.copy(data, gallery_obj.gallery_datas);
    });
  }
  gallery_obj.create = function(value){    
    return $http.post("/galleries.json", value).success(function(data){
      console.log(data.errors);
      if(!data.errors){
        gallery_obj.gallery_datas.unshift(data);
      }
      // 
    });
  }

  gallery_obj.update = function(g_value){
    return $http.patch("galleries/" + g_value.id + ".json", g_value).success(function(data){
      if(!data.errors){
        for(i =0 ; i < gallery_obj.gallery_datas.length; i++){
        if (gallery_obj.gallery_datas[i].id == data.id){
          gallery_obj.gallery_datas[i].title = data.title;
          break;
        }
      }  
      }      
    });
  }

  gallery_obj.destroy = function(id){
    return $http.delete("galleries/" + id + ".json").success(function(data){      
      var new_arr = gallery_obj.gallery_datas.filter(function(val){
        return val["id"] !== id;
      });
      angular.copy(new_arr, gallery_obj.gallery_datas);
    });
  }
  // gallery_obj.show =function(galleryId){
  //   return $http.get("galleries/" + galleryId + ".json");
  // }

  return gallery_obj;
}]);
