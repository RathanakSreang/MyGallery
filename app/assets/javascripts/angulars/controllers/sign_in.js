angular.module("ImageApp").controller("SignInController", ["$location", "$scope", "Auth", function ($location, $scope, Auth) {
 $scope.user = {
  email: "",
  password: ""
 }
$scope.errors = ""
$scope.signIn = function(){
    Auth.login($scope.user).then(function(user){
      // window.location.href = '/';
      $scope.user = user
      $location.path("/galleries");
      // alert($scope.user);
    }, function(error){
      $scope.errors = error;
      $location.path("/users/sign_in");
    });
  };
}]);
