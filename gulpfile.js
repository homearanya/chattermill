var gulp = require("gulp")
var obsoleteImages = require("gulp-obsolete-images")

gulp.task("clean:unused:show", function() {
  return gulp.src(["src/images/**/*"]).pipe(obsoleteImages({ delete: true }))
})
