const helpers = require("../helpers")

const Entity = {

    generateSkeleton: (flags) => {

        const { name  } = flags;

        helpers.generator.generate(require("../assets/entities/entity"), name )
        helpers.generator.generate(require("../assets/entities/index"), name )
    }
}

module.exports = Entity;


