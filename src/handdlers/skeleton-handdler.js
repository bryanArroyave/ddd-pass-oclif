const execa = require("execa")
const { cli } = require("cli-ux")
const helpers = require('../helpers')

const api = require('./api-handdler')
const services = require('./services-handdler')
const config = require('./config-handdler')
const dal = require('./dal-handdler')
const domain = require('./domain-handdler')

const DEPENDENCIES = ["express", "awilix", "cors", "body-parser", "compression", "dotenv", "pg", "pg-hstore", "sequelize", "structure"]


const installDependencies = async () => {

    try {
        helpers.logger.log("Installing all dependencies")
        cli.action.start("")
        const dependencies = DEPENDENCIES.toString().split(",").join(" ");
        await execa(`npm i ${dependencies}`, ["--save"]);
        cli.action.stop("")
        helpers.logger.info("All dependencies were installed", "successfully")
        helpers.logger.info("Dependencies: ", DEPENDENCIES.toString())

    } catch (e) {
        helpers.logger.error(e.split("Error:")[1])
    }
}

const create = async (flags) => {




    helpers.logger.log("Creating skeleton")
    cli.action.start("")
    //API
    api.generateSkeleton(flags);
    api.genereteStaticFiles(flags);
    api.generateMapper(flags);

    // //SERVICES
    // services.generateSkeleton(flags);

    // //CONFIG
    // config.generateSkeleton(flags);

    // //DAL
    // dal.generateSkeleton(flags);
    // dal.generateMapper(flags);

    // //DOMAIN
    // domain.generateSkeleton(flags);
    // domain.generateMapper(flags);

    // //skeleton static files
    // helpers.generator.generate(require('../assets/noFolder/index'), flags.name)
    // helpers.generator.generate(require('../assets/noFolder/database'), flags.name)
    cli.action.stop("")
    helpers.logger.info("The skeleton was created", "successfully")
}

const skeleton = {

    createSkeleton: async args => {

        await create(args);

        // if (args.install)
        //     await installDependencies()
        // else
        //     helper.logger.warn("You should install these dependencies", DEPENDENCIES.toString())
    }



}

module.exports = skeleton;