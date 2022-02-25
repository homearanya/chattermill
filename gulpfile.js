var gulp = require("gulp")
var obsoleteImages = require("gulp-obsolete-images")

gulp.task("clean:unused:show", function() {
  return gulp
    .src([
      "src/images/**/*",
      ".tmp/styles/**/*.css",
      "app/*.html",
      "app/partials/**/*.html",
    ])
    .pipe(obsoleteImages({ log: true }))
})
