// ==== THEME ==== //
'use strict';

const config = require('../gulpconfig.js');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ camelize: true });

// Copy PHP source files to the `build` folder
function themePhp() {
  return gulp
    .src(config.theme.php.src)
    .pipe(plugins.changed(config.theme.php.dest))
    .pipe(gulp.dest(config.theme.php.dest));
}

// Copy Twig source files to the 'build/views' folder
function themeTwig() {
  return gulp
    .src(config.theme.twig.src)
    .pipe(plugins.changed(config.theme.twig.dest))
    .pipe(plugins.flatten())
    .pipe(gulp.dest(config.theme.twig.dest));
}

// Copy fonts to the build/views folder
function themeFonts() {
  return gulp
    .src(config.theme.fonts.src)
    .pipe(plugins.changed(config.theme.fonts.dest))
    .pipe(gulp.dest(config.theme.fonts.dest));
}

// All the theme tasks in one
function theme(done) {
  return gulp.series(gulp.parallel(themePhp, themeTwig, themeFonts))(done);
}

// export task
exports.theme = theme;
exports.themePhp = themePhp;
exports.themeTwig = themeTwig;
exports.themeFonts = themeFonts;
