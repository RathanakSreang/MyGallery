// Karma configuration
// Generated on Thu Jul 16 2015 10:54:01 GMT+0700 (ICT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'vendor/assets/bower_components/angular/angular.js',
        'app/assets/javascripts/angulars/lib/angular-route.min.js',
        'app/assets/javascripts/angulars/lib/angular-animate.min.js',
        'app/assets/javascripts/angulars/lib/angular-resource.min.js',
        'vendor/assets/bower_components/angular-devise/lib/devise-min.js',
        'vendor/assets/bower_components/angular-mocks/angular-mocks.js',
        'app/assets/javascripts/angulars/app.js',
        'app/assets/javascripts/angulars/controllers/*.js',
        'app/assets/javascripts/angulars/directives/*.js',
        'app/assets/javascripts/angulars/services/*.js',

        'spec/javascripts/unit/**/*.js',
        'spec/javascripts/e2e/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}