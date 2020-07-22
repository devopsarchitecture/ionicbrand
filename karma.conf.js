// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
process.env.CHROME_BIN = require('puppeteer').executablePath()
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    browsers: ['ChromeHeadless'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
      thresholds: {
          statements: 80,
          lines: 80,
          branches: 80,
          functions: 80
        }
    },
    reporters: ['progress', 'kjhtml','coverage'],
    preprocessors: {'app/scripts/**/*.js': ['coverage']},
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    customLaunchers: {
       ChromeHeadless: {
            base: 'Chrome',
            flags: [
            '--headless',
            '--disable-web-security',
            '--disable-setuid-sandbox',
            '--no-sandbox',
            '--remote-debugging-port=9222',]
      }
},
    singleRun: false,
    restartOnFileChange: true,
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },
  });
};
