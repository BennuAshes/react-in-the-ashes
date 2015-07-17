var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var gls = require('gulp-live-server');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');

gulp.task('default',['start']);


// "build" forces gulp to wait (its a dependency)
gulp.task('start',function() {
    var server = gls.new('server.js');
    server.start(); // .run(['./dist/server/app.js']);
     
    gulp.watch('./www/index.html',function() {
        server.notify.apply(server,arguments);
    });
    gulp.watch('./www/**',function() {
        server.notify.apply(server,arguments);
    });    
    
    
});

