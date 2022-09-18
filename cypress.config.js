const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  reporterEnabled: "spec, mocha-junit-reporter",
  screenshotsFolder: 'screenshots',
  mochaJunitReporterReporterOptions: {
    "mochaFile": "results/results.[hash].xml"
  },
  e2e: {},
});
