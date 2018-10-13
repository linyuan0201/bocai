var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('cssmin', function() {
    gulp.src(['Bocai/src/css/*/*.css', '!Bocai/src/css/*/*.min.css'])
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('Bocai/dist/css'));
});

gulp.task('uglify', function() {
    gulp.src(['Bocai/src/js/*/*.js', '!Bocai/src/js/*/*.min.js'])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('Bocai/dist/js'));
});

gulp.task('copyHtml', function() {
    gulp.src('Bocai/src/html/*/*.html')
        .pipe(gulp.dest('Bocai/dist/html'));
});

gulp.task('copyPhp', function() {
    gulp.src('Bocai/src/*/*.php')
        .pipe(gulp.dest('Bocai/dist/php'));
});

gulp.task('default', ['copyHtml', 'cssmin', 'uglify', 'copyPhp']);