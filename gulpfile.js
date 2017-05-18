/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-04-09 23:30:20
 * @version $Id$
 */

var gulp = require('gulp');
var pngquant = require('imagemin-pngquant');
var imagemin = require('gulp-imagemin');

gulp.task('imageMin', function() {
    return gulp.src(['storySource/*'],{base:''})
        .pipe(imagemin({
            progressive: true,
            optimizationLevel: 1,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('story2'));
});



gulp.task('default', ['imageMin'], function() {
});


