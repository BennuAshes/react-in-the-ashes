/*
Intent: build options
*/

var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('default',['start']);

// "build" forces gulp to wait (its a dependency)
gulp.task('start',function() {
    var server = gls.new('server.js');
    server.start(); // .run(['./dist/server/app.js']);
    
    
    gulp.watch('./www/index.html',function() {
        server.notify.apply(server,arguments);
    });
    // TODO: combine these
    
    gulp.watch('./www/**/*.js',function() {
        server.notify.apply(server,arguments);
    });
    
       
    
    
});

