const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'jsonlogs/',
	reportPath: 'cypress/reports/html-multi-report/',
	ignoreBadJsonFile: true,
	displayReportTime: true,
	displayDuration: true,
	metadata: {
		device: 'Local test machine.',
		platform: { name: 'macOS', version: 'Big Sur' },
	},
});
