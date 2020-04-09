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

    ${className}Entity: require("./${lower}.entity"),
}
`

}

const getPath = () => {
    
    return path.join('dal', 'entities', `index.js`)
}

module.exports = {
    getSchema,
    getPath
};
