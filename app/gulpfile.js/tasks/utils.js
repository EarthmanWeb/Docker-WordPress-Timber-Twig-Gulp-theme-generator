// ==== UTILITIES ==== //
"use strict";

const config = require('../gulpconfig.js');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ camelize: true });
const del = require('del');


// Used to get around Sass's inability to properly @import vanilla CSS; see: https://github.com/sass/sass/issues/556
function utilsNormalize() {
  return gulp
    .src(config.utils.normalize.src)
    .pipe(plugins.changed(config.utils.normalize.dest))
    .pipe(plugins.rename(config.utils.normalize.rename))
    .pipe(gulp.dest(config.utils.normalize.dest));
}


// Totally wipe the contents of the `dist` folder to prepare for a clean build; additionally trigger Bower-related tasks to ensure we have the latest source files
function delWipe() { return del(config.utils.wipe) }
function utilsWipe(done){ return gulp.series('setup', delWipe)(done)}

// Clean out junk files after build
function delClean() { return del(config.utils.clean) }
function utilsClean(done){ return gulp.series(gulp.parallel('build', utilsWipe), delClean)(done)}

// Copy files from the `build` folder to `dist/[project]`
function pipeSrcDest() {
  return gulp.src(config.utils.dist.src).pipe(gulp.dest(config.utils.dist.dest));
}
function utilsDist(done){ return gulp.series(utilsClean, pipeSrcDest)(done)}


// export tasks
exports.utilsDist = utilsDist;
exports.utilsNormalize = utilsNormalize;
