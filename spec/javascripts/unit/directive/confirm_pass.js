describe('Directive confirmation password', function(){
  var scope, ele;
  beforeEach(module("ImageApp"));

  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    ele = angular.element(
      '<form name="myform" novalidate>' +
        '<input type="password" name="password" ng-model = "password">' +
        '<input type="password" name="password_confirmation" ng-model = "password_confirmation" confirm = "{{password}}" >' +
      '</form>'
    );
    $compile(ele)(scope);
    scope.$apply();
  }));

  it('should valid if password and password confirm match', function(){
    scope.myform.password.$setViewValue("1234567890");
    scope.myform.password_confirmation.$setViewValue("1234567890");
    scope.$digest();
    expect(scope.myform.$valid).toBe(true);
  });

  it('should invalid if password and password confirm not match', function(){
    scope.myform.password.$setViewValue("1234567890");
    scope.myform.password_confirmation.$setViewValue("0987654321");
    scope.$digest();
    expect(scope.myform.$invalid).toBe(true);
  });
});
