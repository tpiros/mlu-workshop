const gulp = require('gulp');
const eslint = require('gulp-eslint');
const tslint = require('gulp-tslint');

gulp.task('lintNode', () => gulp.src(['**/*.js', '!node_modules/**', '!public/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError()));

gulp.task('tslint', () => gulp.src(['public/app/**/*.ts'])
        .pipe(tslint({ configuration: 'public/app/tslint.json' }))
        .pipe(tslint.report())
);

gulp.task('default', ['lintNode', 'tslint'], () => {
  console.info('Linting successful :-)');
});
