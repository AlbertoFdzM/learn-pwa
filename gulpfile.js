var gulp = require('gulp')
var browserSync = require('browser-sync').create()

gulp.task('serve', function () {
  browserSync.init({
    server: ['./src', 'node_modules/knockout/build/output']
  })
})
gulp.task('default', gulp.series('serve'))
