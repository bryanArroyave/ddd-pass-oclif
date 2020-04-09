const path = require("path")


const getSchemaName = (name = null) => {

    const lower = name.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return {
        lower, className
    }
}


const getSchema = (name) => {

    const { lower, className } = getSchemaName(name)

    return `
const config = require("./config")

function getRepository() {
    if (config.REPO === "db") { return "dbRepositories"; }
    else { return "fakeRepositories"; }
}

module.exports = {

    ${className}Repository: require("./" + getRepository() + "/${lower}.repository")
}
`

}

const getPath = () => {

    return path.join('dal', 'repositories', `index.js`)
}

module.exports = {
    getSchema,
    getPath
};
