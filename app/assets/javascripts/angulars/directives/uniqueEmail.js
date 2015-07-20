angular.module("ImageApp").directive("uniqueEmail", function ($http) {  
  var toId;
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, elem, attr, ctrl) {
      scope.$watch(attr.ngModel, function(value){
        if(toId) clearTimeout(toId);

        toId = setTimeout(function(){
          $http.get("/users/email_validate?email=" + value).success(function(data){            
            ctrl.$setValidity("uniqueEmail", ! data.isValid);            
          }).error(function(data, status, headers, config){
            console.log("some gone wrong");
          });
        }, 200);
      });
    }
  };
});
