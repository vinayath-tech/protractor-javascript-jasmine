exports.config = {
	framework: 'jasmine',
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['../specs/*.spec.js'],
	directConnect: true,
	capabilities: {
		browserName: 'chrome',
		driver: "../drivers/chromedriver"
	},
	onPrepare: () => {
		browser.ignoreSynchronization = true;
        browser.manage().window().maximize();

        var jasmineReporters = require('jasmine-reporters');
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
             consolidateAll: true,
             filePrefix: 'guitest-xmloutput',
             savePath: './reports'
}));
	},
	onComplete: function() {
        var browserName, browserVersion;
     	var capsPromise = browser.getCapabilities();
		capsPromise.then(function (caps) {
          browserName = caps.get('browserName');
          browserVersion = caps.get('version');
          platform = caps.get('platform');

		var HTMLReport = require('protractor-html-reporter-2');
		testConfig = {
            reportTitle: 'Protractor Test Execution Report',
            outputPath: './reports',
            outputFilename: 'ProtractorTestReport',
            screenshotPath: './screenshots',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: true,
            testPlatform: platform
        };
        new HTMLReport().from('./reports/guitest-xmloutput.xml', testConfig);
   		 });
 }
}