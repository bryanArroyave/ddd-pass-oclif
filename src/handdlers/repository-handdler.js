const helpers = require("../helpers")

const Entity = {

    generateSkeleton: (flags) => {

        const { name  } = flags;
        helpers.generator.generate(require("../assets/repositories/config"), name )
        helpers.generator.generate(require("../assets/repositories/dbRepository"), name )
        helpers.generator.generate(require("../assets/repositories/fakeRepository"), name )
        helpers.generator.generate(require("../assets/repositories/index"), name )
    }
}

module.exports = Entity;


