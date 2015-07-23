describe('SignUpController', function(){
  var scope, controller, auth;
  beforeEach(module("ImageApp"));
  beforeEach(inject(function($controller, $rootScope, Auth){
    auth = Auth;
    scope = $rootScope.$new();    
    controller =  $controller("SignUpController", {$scope: scope, Auth: auth}); 
  }));

  it('should route to /galeries after sign success', inject(function($q, $location){
    spyOn(auth, "register").and.callFake(function(user) {
      var d = $q.defer();
      d.resolve({"email": "abck@hhh.com"});
      return d.promise;
    });
    scope.signUp();
    scope.$digest();
    expect(scope.user.email).toBe("abck@hhh.com");
    expect($location.path).toBe("/galleries");
  }));

  it('should stay on same url after sign fail', inject(function($q, $location){
    spyOn(auth, "register").and.callFake(function(user) {
      var d = $q.defer();
      d.reject({"error": "Something go wrong!"});
      return d.promise;
    });    
    scope.signUp();
    scope.$digest();
    expect(scope.errors.error).toBe("Something go wrong!");
    expect($location.path).toBe("/users/sign_up");
  }));
  it('should scope.user be define', function(){
    expect(scope.user.email).toBeDefined();
  });
  it('should scope.errors be define', function(){
    expect(scope.errors).toBeDefined();
  });

  it('should clear password confirmation when sope resetpassconfirm is trigger', function(){    
    scope.user.password_confirmation = "1234567890";
    scope.resetpassconfirm();
    expect(scope.user.password_confirmation).toBe('');
  });

});
