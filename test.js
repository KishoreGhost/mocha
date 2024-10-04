const Mocha = require("mocha");

var mocha = new Mocha({
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: "report",
        reportName: "report"
    }
})