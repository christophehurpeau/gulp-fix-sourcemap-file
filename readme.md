## Install

```
npm install --save-dev gulp-fix-sourcemap-file
```


## Usage

```js
var gulp = require('gulp');
var fixSourcemapFile = require('gulp-fix-sourcemap-file');
var sweetjs = require('gulp-sweetjs');
var exnext = require('gulp-esnext');

gulp.task('default', function () {
	return gulp.src('src/app.js')
        .pipe(sweetjs({
            readableNames: true,
            modules: ['es6-macros']
        }))
        .pipe(fixSourcemapFile())
		.pipe(esnext())
		.pipe(gulp.dest('dist'));
});
```
