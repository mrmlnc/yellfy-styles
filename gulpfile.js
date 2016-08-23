'use strict';

const gulp = require('gulp');

const less = require('gulp-less');
const stylus = require('gulp-stylus');
const sass = require('gulp-sass');

const lessPluginGlob = require('less-plugin-glob');
const sassGlob = require('gulp-sass-glob');

const stylelint = require('gulp-stylelint');

const rename = require('gulp-rename');

gulp.task('compile-less', () =>
  gulp.src('less/styles.less')
    .pipe(less({
      plugins: [lessPluginGlob]
    }))
    .pipe(rename('less.css'))
    .pipe(gulp.dest('build'))
);

gulp.task('compile-stylus', () =>
  gulp.src('stylus/styles.styl')
    .pipe(stylus())
    .pipe(rename('stylus.css'))
    .pipe(gulp.dest('build'))
);

gulp.task('compile-sass', () =>
  gulp.src('sass/styles.scss')
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(rename('sass.css'))
    .pipe(gulp.dest('build'))
);

gulp.task('lint', () =>
  gulp.src(['less/**/*.less', 'sass/**/*.scss'])
    .pipe(stylelint())
)

gulp.task('compile', gulp.parallel('compile-less', 'compile-stylus', 'compile-sass'));
