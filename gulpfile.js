var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var sassify = require('sassify');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();
var babelify = require('babelify').configure({"presets": ["es2015", "react"]});

var path = {
  HTML: 'src/index.html',
  ENTRY: './src/index.js',
  OUT: 'build.js',
  SCSS: './src/**/*.scss',
  MINIFIED_OUT: 'build.min.js',
  DEST: './build',
  DEST_HTML: './build/index.html',
};

// Main input
var bundler = watchify(browserify(path.ENTRY)
  .transform(babelify)
  .transform(sassify, {
    'auto-inject': true, // Inject css directly in the code
    base64Encode: false, // Use base64 to inject css
    sourceMap: false // Add source map to the code
  }))
bundler.on('update', bundle)

/**
 * Bundles
 */
function bundle() {
  return bundler.bundle()
    .on('error', console.error)
    .pipe(source(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST))
    .pipe(browserSync.stream({once:true}))
}

gulp.task('bundle', () => {
  bundle()
})

/**
 * Copys the HTML over to the build
 */
gulp.task('copy', () => {
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
})

/**
 * Launches server, watches files.
 */
gulp.task('serve', ['copy', 'bundle'], () => {

  browserSync.init({
    server: path.DEST
  })

  gulp.watch(path.DEST_HTML).on('change', browserSync.reload)
})

// Just running the watch task
gulp.task('default', ['serve']);
