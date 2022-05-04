// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)


const report = require('multiple-cucumber-html-reporter');
const cucumber = require('cypress-cucumber-preprocessor').default
const os = require('os');
const fs = require('fs');

const mapOs = () => {
  if(os.platform().startsWith('win')) {
      return 'windows';
  } else if (os.platform().startsWith('osx')) {
      return 'osx';
  } else if (os.platform().startsWith('linux')) {
      return 'linux';
  } else if (os.platform().startsWith('ubuntu')) {
      return 'ubuntu';
  } else if (os.platform().startsWith('android')) {
      return 'android';
  } else if (os.platform().startsWith('ios')) {
      return 'ios';
  }
};


module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  on('after:run', (results) => {

    if (results) {
      fs.mkdirSync("cypress/.run", { recursive: true });
      fs.writeFile("cypress/.run/results.json", JSON.stringify(results));
    }

    fs.readFile('cypress/.run/results.json', function read(err, data) {
      if (err) {
          throw err;
      }
      var runInfos = JSON.parse(data);
      report.generate({
        jsonDir: './cypress/cucumber-json/',
        reportPath: './cypress/cucumber-report/',
        metadata:{
          browser: {
            name: runInfos.browserName,
            version: runInfos.browserVersion
          },
          device: 'Cypress',
          platform: {
              name: mapOs()
          }
        },
          customData: {
              title: 'Run info',
              data: [
                  {label: 'Project', value: 'Cypress UI E2E Automation Project'},
                  {label: 'Execution Start Time', value: new Date(runInfos.startedTestsAt).toLocaleString()},
                  {label: 'Execution End Time', value: new Date(runInfos.endedTestsAt).toLocaleString()}
              ]
          }
      })
    })  
  })
}

