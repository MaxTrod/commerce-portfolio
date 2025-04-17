import webp from 'gulp-webp';
// import imagemin from 'gulp-imagemin';
// import imageminWebp from 'imagemin-webp';
// import rename from "gulp-rename";
import gulpif from 'gulp-if';
// import changed from "gulp-changed";

export const webpImages = () => {
  return app.gulp.src([`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png}`], { encoding: false })
    // .pipe(changed(app.paths.buildImgFolder))
    // .pipe(webp())

    .pipe(gulpif(app.isProd,
      webp()
    ))
    // .pipe(gulpif(app.isProd,
    //   imagemin([
    //     imageminWebp({
    //       quality: 85,
    //     }),
    //   ]),
    // ))

    // .pipe(gulpif(app.isProd,
    //   rename({ extname: '.webp' })
    // ))

    // .pipe(
    //   imagemin([
    //     imageminWebp({
    //       quality: 85,
    //     }),
    //   ])
    // )
    // .pipe(rename({ extname: '.webp' }))
    .pipe(app.gulp.dest(app.paths.buildImgFolder))
};

