// ==== BROWSERSYNC ==== //
"use strict";

const config = require('../gulpconfig.js');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// BrowserSync: be sure to setup `proxy` in `/gulpconfig.js`
// Quick start: connect all your devices to the same network (e.g. wifi) and navigate to the address output in the console when you run `gulp`
function browsersyncConfig() { browserSync.init(config.browsersync) };
function browsersync(done) { return gulp.series('build', browsersyncConfig)(done)};

exports.browsersync = browsersync;

