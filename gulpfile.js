/**
 * Created by programer on 2/3/17.
 */
let gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css');
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    gscss = require('gulp-sass'),
    merge = require('merge-stream');





gulp.task('appCss',function(){

    let scss,css;

    scss=gulp.src([
        'public/scss/**/*.scss'
    ])
        .pipe(gscss({
            errLogToConsole: true
        }));

    css=gulp.src(
        [
            'bower_components/normalize-css/normalize.css'

        ]);

    return merge(css,scss)
        .pipe(concat('app.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/css'));


});

gulp.task('fontsA',function () {

    return gulp.src([
        'bower_components/font-awesome/fonts/**'
    ]).pipe(gulp.dest("public/fonts"));
});




gulp.task('appJs',function(){

    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/tether/dist/js/tether.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/parallax.js/parallax.js',
        'bower_components/matchHeight/dist/jquery.matchHeight.js',
        'bower_components/isotope/isotope.pkgd.js'


    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));

});


gulp.task('watch',()=>{

    gulp.watch(['public/scss/**/*.scss'],['appCss','appJs']);
});


gulp.task("default",['appCss','fontsA','appJs']);