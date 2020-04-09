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
    ${className}Service : require("./${lower}.service")
}
`

}

const getPath = () => {
    return path.join('services', 'index.js')
}




module.exports = {
    getSchema,
    getPath
};


