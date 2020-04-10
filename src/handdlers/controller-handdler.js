const helpers = require('../helpers');

const Controller = {
	generateSkeleton: async (flags) => {
		const { name } = flags;
		console.log('entro');

		await helpers.generator.generate(require('../assets/controllers/index'), name);
		await helpers.generator.generate(require('../assets/controllers/controller'), name);
	},
	addToIndex: async (flags) => {},
};

module.exports = Controller;
