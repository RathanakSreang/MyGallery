angular.module("ImageApp").controller("NavController", ["$location", "$scope", "Auth", function ($location, $scope, Auth) {
 // $http.get("").success(function(data){
 //  $scope.galleries =data;
 // });
  Auth.currentUser().then(function(user){    
  });  
  $scope.signIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;
  // window.location.reload();
  $scope.$on("devise:login", function(e, user){
    // $scope.signIn = Auth.isAuthenticated;  
  });
  
  $scope.$on("devise:logout", function(e,user){
    $scope.user = {};
    $location.path("/users/sign_in");
  });
}]);
