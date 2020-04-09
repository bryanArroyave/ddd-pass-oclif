const { Command, flags } = require('@oclif/command')
const { cli } = require("cli-ux")
const { skeleton } = require("../../handdlers")


class SkeletonInitCommand extends Command {
    async run() {

        const { flags } = this.parse(SkeletonInitCommand)

        if (!flags.install)
            flags.install = await cli.confirm("do yo want to install all dependencis for this project? (Y/N)")

        skeleton.createSkeleton(flags)
    }
}

SkeletonInitCommand.description = `Describe the command here
...
Extra documentation goes here
`


SkeletonInitCommand.flags = {
    install: flags.boolean(
        {
            char: 'i',
            description: 'install all dependencies that the project is using',
            default: false
        }
    ),
    name: flags.string(
        {
            char: 'n',
            description: 'name for the initial examples',
            default: 'user'
        }
    ), all: flags.boolean(
        {
            char: 'a',
            description: 'name for the initial examples',
            default: true
        }
    ),

}

module.exports = SkeletonInitCommand
