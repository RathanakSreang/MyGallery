angular.module("ImageApp").directive("confirm", function () {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(scope, elem, attr, ngModel) {      
      scope.$watch(attr.ngModel, function(value) {        
        validate(value);
      });      
      var validate = function(value) {
        ngModel.$setValidity("confirm", attr.confirm === value);
      }
    }
  }
});
