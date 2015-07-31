angular.module("ImageApp").directive('fileUpload', [function () {
  return {
    restrict: 'A',
    // link: function (scope, iElement, iAttrs) {
    scope: {fileUpload:'&'},
    replace: true,
    template: '<input type="file" id="file" />',
    link: function(scope, ele, attrs){
      ele.bind('change', function(){
        var file = ele[0].files;
        if (file)scope.fileUpload({files: file});
      })
    }
    }
  }]);
