var gulp = require('gulp')
var sass = require('gulp-sass');
var post = require('gulp-postcss');
var importC = require('postcss-import')();
var variabs = require('postcss-css-variables')();


gulp.task('postcss', function() {
	return gulp.src('test/bootstrap.css')
		.pipe(post([importC, variabs]))
		.pipe(gulp.dest('test2'));
})

gulp.task('sass', function() {
	return gulp.src('bower_components/bootstrap-sass/assets/stylesheets/bootstrap.scss')
		.pipe(sass())
		.pipe(gulp.dest('test3'));
})