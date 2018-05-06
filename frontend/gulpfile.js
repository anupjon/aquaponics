var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')

    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./scss/**/*.scss", ['sass']).on('change', browserSync.reload);
  gulp.watch("./**/*.html").on('change', browserSync.reload);
  gulp.watch("./js/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
