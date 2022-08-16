const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));

const scsslint = require('gulp-scss-lint');

gulp.task('styles', () => {
    return gulp.src('src/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('clean', () => {
    return del([
        'dist/css/main.css',
    ]);
});


gulp.task('scss-lint', function() {
  return gulp.src('/scss/*.scss')
    .pipe(scsslint());
});


gulp.task('watch', () => {
    gulp.watch('src/css/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});


gulp.task('default', gulp.series(['clean', 'styles', 'watch']));
