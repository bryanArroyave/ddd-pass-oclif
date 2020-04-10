const fs = require('fs');
const helpers = require('./');

const file = {
	readFile: (path) => fs.readFileSync(path).toString(),
	exists: (path) => fs.existsSync(path),
	createFile: (path, content) => {
		fs.appendFile(path, content, (err) => {
			if (err) {
				helpers.logger.error(err + 'file', path);
			} else {
				helpers.logger.info(`File ${path}`, 'created successfully');
			}
		});
	},
	createFolder: (path) => {
		fs.mkdir(path, (err) => {
			if (err) {
				helpers.logger.error(err + 'fol', path);
			} else {
				helpers.logger.info(`Folder ${path}`, 'created successfully');
			}
		});
	},
	updateFile: (path, content) => {
		this.deleteFile(path);
		this.createFile(path, content);
	},
	deleteFile: (path) => {
		fs.unlink(path, (err) => {
			if (err) helpers.logger.error(err + 'unlink', path);
			else {
				helpers.logger.info(`File ${path}`, 'deleted successfully');
			}
		});
	},
	deleteFolder: (path) => {},
};

module.exports = file;
