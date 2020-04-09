const helpers = require("../helpers")

const Controller = {

    generateSkeleton: (flags) => {
        const { name  } = flags;
        helpers.generator.generate(require("../assets/domain/index"), name )
        helpers.generator.generate(require("../assets/domain/domain"), name )
    },
    generateMapper: (flags) => {
        const { name } = flags;
        helpers.generator.generate(require('../assets/mappers/domain-mapper'), name )
    }
}

module.exports = Controller;


