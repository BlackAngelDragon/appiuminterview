const allure = require('allure-commandline')

exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    loglevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableMochaHooks: true
    }]],
    maxInstances: 1,
    sync: true,
    specs: [
        './src/tests/login.js',
        './src/tests/menu.js'
    ],
    capabilities:[{
        platformName: "Android",
        automationName: "UiAutomator2",
        udid: "emulator-5554",
        appPackage: "io.parrotsoftware.qatest",
        appActivity: ".MainActivity"
    }],
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if(error){
            browser.takeScreenshot();
        }
    }
}