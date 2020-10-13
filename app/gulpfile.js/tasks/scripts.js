// ==== SCRIPTS ==== //
'use strict';

const config = require('../gulpconfig.js');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ camelize: true });
const merge = require('merge-stream');

// Minify scripts in place
function scriptsMinify() {
  return (
    gulp
      .src(config.scripts.minify.src)
      .pipe(plugins.sourcemaps.init())
      // .pipe(plugins.uglify(config.scripts.minify.uglify))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(config.scripts.minify.dest))
  );
}

// Master script task; lint -> bundle -> minify
function scripts() {
  return scriptsMinify();
}

// export task
exports.scripts = scripts;
