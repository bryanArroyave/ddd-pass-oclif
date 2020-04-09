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
/*
    All mappers can be write HERE
*/
`

}

const getPath = (name) => {
    const { lower } = getSchemaName(name)
    return path.join('api', 'mappers', `${lower}.mapper.js`)
}

module.exports = {
    getSchema,
    getPath
};
