angular.module("ImageApp").controller("SignUpController", ["$location", "$scope", "Auth", function ($location, $scope, Auth) {
  $scope.user = {
    email: "",
    name: "",
    password: "",
    password_confirmation: ""    
  };
  $scope.errors = "";
  $scope.resetpassconfirm = function(){$scope.user.password_confirmation ="";}
  $scope.signUp = function(){    
    Auth.register($scope.user).then(function(user){      
      $scope.user = user;      
      $location.path = "/galleries";
    }, function(error){      
      $scope.errors = error;
      $location.path = "/users/sign_up";
    });    
  };
}]);
