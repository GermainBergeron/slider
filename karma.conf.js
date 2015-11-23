module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
            './dist/js/Coveo.Slider.js',
            './specs/**/*.js'
        ],
        reporters: ['mocha', 'coverage'],
        mochaReporter: {
            ignoreSkipped: true
        },
        preprocessors: {
            './dist/Coveo.Slider.js': 'coverage'
        },
        coverageReporter: {
            dir: './coverage/',
            includeAllSources: true,
            reporters: [
                {type: 'html', subdir: '.'},
                {type: 'cobertura', subdir: '.', file: 'cobertura.txt'},
                {type: 'text-summary'}
            ]
        },
        port: 9876,
        colors: true,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
