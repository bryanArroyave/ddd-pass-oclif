const helpers = require('../helpers')

const API = {
    generateSkeleton: (flags) => {

        const { name  } = flags;

        helpers.generator.generate(require('../assets/services/base'), name )
        helpers.generator.generate(require('../assets/services/index'), name )
        helpers.generator.generate(require('../assets/services/service'), name )
    }
}

module.exports = API;


