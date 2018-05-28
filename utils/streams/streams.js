import commander from 'commander';
import functions, { argTypes } from './functions';
import getAction from './getActions';
import { errorPrinter } from './errors';

const printError = errorPrinter(commander.help.bind(commander));

commander
    .option('-a, --action <action>', 'Action')
    .option('-f, --file <file>', 'File')
    .option('-p, --path <path>', 'Path', (path, paths) => (paths.push(path), paths), []);

commander.parse(process.argv);

if (!isOption('action')) {
  	printError('The option --action is reduired!');
} else {
  	const handler = functions[commander.action];
    if(handler) {
  		perfomAction(handler);
    }
    printError('Action you set is absent!');
}

function isOption(option) {
    return commander.hasOwnProperty(option);
}

function perfomAction({ argType, func }) {
    if (argType === argTypes.str) {
        const { args } = commander;
        if(args) {
            func(args[0]);
        }
    }
    if (argType === argTypes.filePath) {
        if(isOption('file')) {
            func(commander.file);
        }
        printError('You need define option --file');
    }
    if (argType === argTypes.path) {
        if(isOption('file')) {
            func(commander.path);
        }
        printError('You need define option --path');
  	}
}
