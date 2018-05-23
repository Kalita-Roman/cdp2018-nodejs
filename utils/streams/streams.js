import commander from 'commander';
import functions, { argTypes } from './functions';

commander
	.option('-a, --action <action>', 'Action')
	.option('-f, --file <file>', 'File')
	.option('-p, --path <path>', 'Path', (path, paths) => (paths.push(path), paths), []);

commander.parse(process.argv);

const handler = functions[commander.action];
function getArgs(handler) {
	if (handler.argType === argTypes.str) {
		const { args } = commander;
		return args && args[0];
	}
	if (handler.argType === argTypes.filePath) {
		return commander.file;
	}
	if (handler.argType === argTypes.path) {
		return commander.path;
	}
}
handler.func(getArgs(handler));
