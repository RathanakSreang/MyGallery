angular.module("ImageApp").directive("uniqueEmail", function ($http, $timeout) {  
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, elem, attr, ctrl) {
      var toId;
      scope.$watch(attr.ngModel, function(value){
        if(toId) $timeout.cancel(toId);
        toId = $timeout(function(){
          $http.get("/users/email_validate?email=" + value).success(function(data){
            // console.log(data);
            ctrl.$setValidity("uniqueEmail", ! data.isValid);            
          }).error(function(data, status, headers, config){
            console.log("some gone wrong");
          });
        }, 200);
      });
    }
  };
});
