// ==== IMAGES ==== //
"use strict";

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ camelize: true });
const config = require('../gulpconfig.js');

// Copy changed images from the source folder to `build` (fast)
function images(){
  return gulp
    .src(config.images.build.src)
    .pipe(plugins.changed(config.images.build.dest))
    .pipe(gulp.dest(config.images.build.dest));
}

// Optimize images in the `dist` folder (slow)
function pipeImages() {
  return gulp
    .src(config.images.dist.src)
    .pipe(plugins.imagemin(config.images.dist.imagemin))
    .pipe(gulp.dest(config.images.dist.dest));
};
function imagesOptimize(done){ return gulp.series('utilsDist', pipeImages )(done)}


// export tasks
exports.imagesOptimize = imagesOptimize;
exports.images = images;
