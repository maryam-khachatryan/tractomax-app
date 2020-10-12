var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
	return gulp.src('./scss/**/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions, > 1%']
		}))
		.pipe(cssnano())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});
