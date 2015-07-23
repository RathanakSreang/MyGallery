describe('Email', function(){
  var scope, ele, timeout, form, httpBackend;
  beforeEach(module("ImageApp"));

  beforeEach(inject(function($rootScope, $compile, $timeout, $httpBackend){
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    timeout = $timeout;
    ele = angular.element(
      '<form name= "myform" novalidate>' + 
        '<input autofocus="autofocus" type="email" ng-model = "email" name="email" unique-email = "email">' +
        '</form>');
    $compile(ele)(scope);
    scope.$apply();
    form = scope.myform;
  }));

  it('should valid if user input the exist email', inject(function(){
    httpBackend.whenGET("/users/email_validate?email=norin@asdasd.com").respond(200, {isValid: false});

    form.email.$setViewValue("norin@asdasd.com");
    scope.$digest();
    timeout.flush(200);
    httpBackend.flush();
    expect(scope.myform.$valid).toBe(true);
  }));

  it('should invalid if user input the exist email', inject(function(){
    httpBackend.whenGET("/users/email_validate?email=norin@asdasd.com").respond(200, {isValid: true});

    form.email.$setViewValue("norin@asdasd.com");
    scope.$digest();
    timeout.flush(200);
    httpBackend.flush();
    expect(scope.myform.$invalid).toBe(true);
  }));
});
