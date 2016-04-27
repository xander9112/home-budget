module.exports = {
	paths:      {
		sass:   './assets/sass/main.scss',
		entry:  './assets/js/index.js',
		js:     './assets/js/**/*.js',
		vendor: [
			'./assets/vendor/jquery-2.2.2.min.js',
			'./assets/vendor/lodash.core.min.js',
			'./assets/vendor/**/*.js'
		],
		html:   './*.html',
		dist:   './public',
		images: './assets/images/**/*',
		fonts:  './assets/fonts/**/*'
	},
	output:     {
		js:     'assets/js',
		vendor: 'assets/vendor',
		css:    'assets/css',
		images: 'assets/images',
		fonts:  'assets/fonts'
	},
	production: false
};
