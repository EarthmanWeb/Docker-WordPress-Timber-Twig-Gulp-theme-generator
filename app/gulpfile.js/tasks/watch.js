// ==== WATCH ==== //
'use strict';

const config = require('../gulpconfig.js');
const gulp = require('gulp');

// Watch (BrowserSync version): build stuff when source files are modified, let BrowserSync figure out when to reload
// Task chain: build -> browsersync -> watch
function watchAssets() {
  gulp.watch(config.watch.src.styles, gulp.series('styles'));
  gulp.watch(config.watch.src.scripts, gulp.series('scripts'));
  gulp.watch(config.watch.src.images, gulp.series('images'));
  gulp.watch(config.watch.src.theme, gulp.series('theme'));
}

function watchBrowserSync(done) {
  return gulp.series('watchAssets')(done);
}

// Master control switch for the watch task
function watch(done) {
  return gulp.parallel('browsersync', 'watchBrowserSync')(done);
}

// export tasks
exports.watch = watch;
exports.watchAssets = watchAssets;
exports.watchBrowserSync = watchBrowserSync;
