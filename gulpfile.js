const gulp = require("gulp")
const gulp = require("gulp")

gulp.task("images:filter", function() {
  return gulp
    .src(["src/images/**/*", ".src/styles/**/*.css", "src/*.html"])
    .pipe(plumber())
    .pipe(unusedImages())
    .pipe(plumber.stop())
})
