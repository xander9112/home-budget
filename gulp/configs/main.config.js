module.exports = {
  paths: {
    sass: './assets/sass/**/*.scss',
    entry: './assets/js/index.js',
    js: './assets/js/**/*.js',
    html: './*.html',
    dist: './public',
    images: './assets/images/**/*'
  },
  output: {
    js: 'js',
    css: 'css',
    images: 'images'
  },
  production: false
};
