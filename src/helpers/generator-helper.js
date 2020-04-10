const helpers = require('.');
const path = require('path');

const generator = {
	addToIndex: (_path, content, token) => {
		const oldContent = helpers.file.readFile(_path);
		if (oldContent) {
			const split = oldContent.split(token);
			if (split[0] && split[1]) {
				content = split[0] + token + '\n' + content + '\n' + split[1];
				helpers.file.update(_path, content);
			}
		}
	},
	generate: (structure, name) => {
		const _path = structure.getPath(name);
		const content = structure.getSchema(name);
		const folders = _path.split(path.sep);

		let joinedPath = '';
		folders
			.filter((e) => !path.extname(e))
			.forEach((e) => {
				joinedPath = path.join(joinedPath, e);

				if (!helpers.file.exists(joinedPath)) {
					helpers.file.createFolder(joinedPath);
				}
			});
		console.log(helpers.file.exists(_path));
		console.log(path.basename(_path));

		if (helpers.file.exists(_path)) {
			if (path.basename(_path) !== 'index.js') {
				console.log('sisi');

				helpers.file.deleteFile(_path);
				helpers.file.createFile(_path, content);
			} else {
				//update file
			}
		} else {
			helpers.file.createFile(_path, content);
		}
	},
};

module.exports = generator;
