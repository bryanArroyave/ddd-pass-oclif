const helpers = require("../helpers")

const Dto = {

    generateSkeleton: async (flags) => {

        const { name  } = flags;

        await helpers.generator.generate(require("../assets/dtos/index"), name )
        await helpers.generator.generate(require("../assets/dtos/dto"), name )
    }
}

module.exports = Dto;


