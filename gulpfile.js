var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('app/**/*.*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['app/**/*.*'], ['html']);
});

gulp.task('default', ['connect', 'watch']);