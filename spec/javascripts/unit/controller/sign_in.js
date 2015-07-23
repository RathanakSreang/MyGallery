describe('SignInController', function(){

  var scope, signinControler, auth;
  beforeEach(module("ImageApp"));
  beforeEach(inject(function($controller, $rootScope, Auth){
    scope = $rootScope.$new();
    auth = Auth;
    controller = $controller("SignInController", {$scope: scope, Auth: auth});
  }));

  it('should have scope.user define', function(){
    expect(scope.user).toBeDefined();
  });

  it('should have scope.user define', function(){
    expect(scope.errors).toBeDefined();
  });
  it('should route to /galleries and scope.user.email have value if sign in success', inject(function($q, $location){
    spyOn(auth, "login").and.callFake(function(user){
      var d = $q.defer();
      d.resolve({"email": "abcd@efgh.lk"});
      return d.promise;
    });    
    scope.signIn();
    scope.$digest();    
    expect(scope.user.email).toBe("abcd@efgh.lk");
    expect($location.path()).toBe("/galleries");
  }));

  it('should staay on same route url and scope.error contain value if sign in fail', inject(function($q, $location){
    spyOn(auth, "login").and.callFake(function(user){
      var d = $q.defer();
      d.reject({"error": "Some thing wrong"});
      return d.promise;
    });  
    scope.signIn();
    scope.$digest();  
    expect(scope.errors.error).toBe("Some thing wrong");
    // console.log($location.path);
    expect($location.path()).toBe("/users/sign_in");
  }));
});
