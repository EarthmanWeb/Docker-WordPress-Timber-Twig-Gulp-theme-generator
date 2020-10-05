// ==== MAIN ==== //
"use strict";

const gulp = require('gulp');

// One-off setup tasks
function setup(done) { gulp.series('utilsNormalize')(done) }


// Build a working copy of the theme
function build(done) {
  return gulp.series(gulp.parallel('images', 'scripts', 'styles', 'theme'))(done);
}

// Dist task chain: wipe -> build -> clean -> copy -> compress images
// NOTE: this is a resource-intensive task!
function dist(done) { gulp.series('imagesOptimize')(done)}

// export tasks
exports.setup = setup;
exports.build = build;
exports.dist = dist;
