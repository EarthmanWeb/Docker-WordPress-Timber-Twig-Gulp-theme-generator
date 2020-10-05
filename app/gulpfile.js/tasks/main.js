// ==== MAIN ==== //
"use strict";

const gulp = require('gulp');
const composer = require('gulp-composer');

// Install Composer deps
function themeComposerInstall(done){
  return gulp.series(
    function () {
      composer({
          "working-dir": "./src/theme",
          bin: "composer"
      })
    }
  )(done)
}

// One-off setup tasks
function setup(done) { gulp.series('utilsNormalize')(done) }


// Build a working copy of the theme
function build(done) {
  return gulp.parallel(themeComposerInstall, 'images', 'scripts', 'styles', 'theme')(done);
}

// Dist task chain: wipe -> build -> clean -> copy -> compress images
// NOTE: this is a resource-intensive task!
function dist(done) { gulp.series('imagesOptimize')(done)}

// export tasks
exports.setup = setup;
exports.build = build;
exports.dist = dist;
exports.themeFonts = themeComposerInstall;

