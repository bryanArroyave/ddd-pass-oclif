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
module.exports = {
    ${className}: require("./${lower}.domain")
};
`

}

const getPath = (name) => {

    return path.join('domain', `index.js`)
}

module.exports = {
    getSchema,
    getPath
};
