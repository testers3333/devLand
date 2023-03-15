module.exports = (bot) => {
    var colors = require('colors');
    process.on('unhandledRejection', (reason, p) => {
        console.log(colors.red('[antiCrash] :: Unhandled Rejection/Catch'));
        console.log(colors.red(reason, p));
    });
    process.on("uncaughtException", (err, origin) => {
        console.log(colors.red('[antiCrash] :: Uncaught Exception/Catch'));
        console.log(colors.red(err, origin));
    }); process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(colors.red(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)'));
        console.log(colors.red(err, origin));
    });
    process.on('multipleResolves', (type, promise, reason) => {
        console.log(colors.red('[antiCrash] :: Multiple Resolves'));
    });
}
