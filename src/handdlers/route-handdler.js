const helpers = require("../helpers")

const Route = {

    generateSkeleton: async (flags) => {

        const { name  } = flags;

        await helpers.generator.generate(require("../assets/routes/index"), name )
        await helpers.generator.generate(require("../assets/routes/route"), name )
    }
}

module.exports = Route;


