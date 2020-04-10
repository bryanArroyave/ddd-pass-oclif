const controller = require('./controller-handdler');
const route = require('./route-handdler');
const dto = require('./dto-handdler');
const helpers = require('../helpers');

const API = {
	generateSkeleton: (flags) => {
		if (flags.all || flags.controller) controller.generateSkeleton(flags);

		// if (flags.all || flags.route)
		//     route.generateSkeleton(flags)
		// if (flags.all || flags.dto)
		//     dto.generateSkeleton(flags)
	},
	genereteStaticFiles: async (flags) => {
		const { name } = flags;

		// await helpers.generator.generate(require('../assets/noFolder/container'), name )
		// await helpers.generator.generate(require('../assets/noFolder/server'), name )
		// await helpers.generator.generate(require('../assets/noFolder/startUp'), name )
	},
	generateMapper: async (flags) => {
		const { name } = flags;

		//await helpers.generator.generate(require('../assets/mappers/api-mapper'), name )
	},
};

module.exports = API;
