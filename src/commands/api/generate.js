const { Command, flags } = require('@oclif/command')
const { cli } = require("cli-ux")
const helpers = require("../../helpers")
const api = require('../../handdlers/api-handdler')


class ApiGenerateCommand extends Command {
    async run() {

        const { flags } = this.parse(ApiGenerateCommand)

        if (!flags.all && !flags.controller)
            flags.controller = await cli.confirm(`do yo want to generate a controller to ${flags.name}? (Y/N)`)
        if (!flags.all && !flags.route)
            flags.route = await cli.confirm(`do yo want to generate a route to ${flags.name}? (Y/N)`)
        if (!flags.all && !flags.dto)
            flags.dto = await cli.confirm(`do yo want to generate a dto to ${flags.name}? (Y/N)`)


        api.generateSkeleton(flags)
        api.generateMapper(flags)

        helpers.logger.info("generate successfully")
    }
}

ApiGenerateCommand.description = `Describe the command here
...
Extra documentation goes here
`


ApiGenerateCommand.flags = {
    all: flags.boolean(
        {
            char: 'a',
            description: 'create ',
            default: false
        }
    ),
    controller: flags.boolean(
        {
            char: 'c',
            description: 'create controller skeleton',
            default: false
        }
    ),
    route: flags.boolean(
        {
            char: 'r',
            description: 'create route skeleton',
            default: false
        }
    ),
    dto: flags.boolean(
        {
            char: 'd',
            description: 'create dto skeleton',
            default: false
        }
    ),
    name: flags.string(
        {
            char: 'n',
            description: 'name',
            default: "user"
        }
    ),
}

module.exports = ApiGenerateCommand
