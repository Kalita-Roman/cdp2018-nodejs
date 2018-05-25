export const errorPrinter = (cb) => (msg) => {
    console.error('\x1b[31m');
    console.error('> ERROR!');
    console.error('> ' + msg);
    console.error('\x1b[0m');
    cb();
};
