import browserSync from 'browser-sync';
import fileInclude from "gulp-file-include";
import typograf from "gulp-typograf";
import changed from "gulp-changed";
import webpHTML from "gulp-webp-retina-html";
import gulpif from 'gulp-if';

export const htmlInclude = () => {
  return app.gulp.src([`${app.paths.base.src}/*.html`])
    .pipe(changed(app.paths.base.build, { hasChanged: changed.compareContents }))
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file',
      maxRecursion: 100
    }))
    .pipe(typograf({
      locale: ['ru', 'en-US']
    }))

    .pipe(gulpif(app.isProd,
      webpHTML({
        extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
        retina: {
          1: '',
          2: '@2x',//можно удалить всю строку, если нет 2x графики
        },
      })
    ))

    .pipe(app.gulp.dest(app.paths.base.build))
    .pipe(browserSync.stream());
}
