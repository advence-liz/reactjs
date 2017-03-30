const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require("gulp-clean");

gulp.task("clean", function () {
	return gulp.src("dist/", { read: false }).pipe(clean());
});

gulp.task('default', ['clean'], function () {
	gulp.src('src/*.js')
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest('dist'));
}

);