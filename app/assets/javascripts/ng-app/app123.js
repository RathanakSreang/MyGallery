// var imageApp = angular.module("ImageApp", ["ngAnimate"])
//   .config(function ($locationProvider) {  
// });
// imageApp.controller("AppController", function ($scope) {
  
// });
// imageApp.controller("validateCtrl", function ($scope) {
//   $scope.user = {};
//   // $scope.user.email ="ddddddddddd@ssssss";
//   // $scope.user.password ="1234567890";  
//   $scope.resetpassconfirm = function(){$scope.user.password_confirmation ="";}    
// });

// imageApp.controller("GalleryList", function($scope){

// });
// imageApp.directive("uniqueEmail", function ($http) {
//   // console.log("We in");
//   var toId;
//   return {
//     restrict: "A",
//     require: "ngModel",
//     link: function (scope, elem, attr, ctrl) {
//       scope.$watch(attr.ngModel, function(value){
//          // console.log(value);
//         if(toId) clearTimeout(toId);

//         toId = setTimeout(function(){
//           $http.get("/users/email_validate?email=" + value).success(function(data){            
//             ctrl.$setValidity("uniqueEmail", ! data.isValid);            
//           }).error(function(data, status, headers, config){
//             console.log("some gone wrong");
//           });
//         }, 200);
//       });
//     }
//   };
// });
// // imageApp.directive("resetPassconfirm", function () {
// //   return {
// //     restrict: "A",
// //     require: "ngModel",
// //     link: function(scope, elem, attr, ngModel) {
// //       // console.log(attr.ngModel);
// //       scope.$watch(attr.ngModel, function(value) {
// //         // console.log(value);
// //         // console.log(attr.confirm);
// //         console.log(attr.resetPassconfirm);        
// //       });  
// //     }
// //   }
// // });
// imageApp.directive("confirm", function () {
//   return {
//     restrict: "A",
//     require: "ngModel",
//     link: function(scope, elem, attr, ngModel) {
//       // console.log(attr.ngModel);
//       scope.$watch(attr.ngModel, function(value) {
//         // console.log(value);
//         // console.log(attr.confirm);
//         validate(value);
//       });      
//       var validate = function(value) {
//         ngModel.$setValidity("confirm", attr.confirm === value);
//       }
//     }
//   }
// });
