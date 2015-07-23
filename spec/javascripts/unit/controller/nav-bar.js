describe('NavController', function(){
  var scope, controller, auth;
  beforeEach(module("ImageApp"));

  beforeEach(inject(function($controller, $rootScope, Auth){
    auth =Auth;
    scope = $rootScope.$new();
    controller = $controller("NavController", {$scope: scope, Auth: auth});
  }));

  beforeEach(inject(function($httpBackend){
    $httpBackend.expectPOST('/users/sign_in.json').respond(200, "");
    $httpBackend.expectDELETE('/users/sign_out.json').respond(200, "");
  }));
  it('should define and assign scope.signIn with auth.isAuthenticated', function(){
    // scope.$digest();
    expect(scope.signIn).toBeDefined();    
    expect(scope.signIn).toEqual(auth.isAuthenticated);
  });

  // it('should sign user out after scope.logout was trigger', function(){
  //   // auth.login();
  //   scope.signIn() = true;
  //   scope.logout();
  //   scope.$digest();
  // });
});
