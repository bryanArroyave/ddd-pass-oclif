const entity = require("./entity-handdler")
const repository = require("./repository-handdler")

const helpers = require('../helpers')

const DAL = {
    generateSkeleton: (flags) => {

        entity.generateSkeleton(flags)
        repository.generateSkeleton(flags)
    },
    generateMapper: (flags) => {
        const { name  } = flags;
        helpers.generator.generate(require('../assets/mappers/dal-mapper'), name )
    }
}

module.exports = DAL;


