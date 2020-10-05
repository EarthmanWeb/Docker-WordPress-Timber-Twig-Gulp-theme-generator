// ==== GULPFILE ==== //

// This configuration follows the modular design of the `gulp-starter` project by Dan Tello: https://github.com/greypants/gulp-starter
// Explore `tasks` for more...

// const requireDir = require('require-dir');
// requireDir('./tasks');

const gulp = require('gulp');
const requireDir = require('require-dir');
// load tasks
requireDir('./tasks', {
  recurse: true,
  mapValue: function(value) {
    if (typeof value === 'object') {
      const keys = Object.keys(value);
      return keys.map(taskName => {
        return gulp.task(taskName, value[taskName])
      });
    }
  }
});