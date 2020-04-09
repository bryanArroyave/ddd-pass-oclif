const helpers = require('../helpers')

const Config = {
    generateSkeleton: (flags) => {
        const { name  } = flags;
        helpers.generator.generate(require('../assets/config/index'), name )
        helpers.generator.generate(require('../assets/config/enviroment'), "production" )
        helpers.generator.generate(require('../assets/config/enviroment'), "qa" )
        helpers.generator.generate(require('../assets/config/enviroment'), "developtment" )
    }
}

module.exports = Config;


