const gulp = require('gulp');
const browserSync = require('browser-sync');
const pug = require('gulp-pug');

/* Server */
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });
    gulp.watch('build/**/*').on('change', browserSync.reload);
});

/*  Pug */
gulp.task('templates:compile', function buildHTML() {
    return gulp.src('source/template/index.pug') // Точка входа
    .pipe(pug({
      pretty: true // Код HTML на выходе - несжатый
    }))
    .pipe(gulp.dest('build'))
  });