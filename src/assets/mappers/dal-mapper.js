const path = require("path")


const getSchemaName = (name = null) => {

    const lower = name.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return {
        lower, className
    }
}


const getSchema = (name) => {

    const { lower } = getSchemaName(name)

    return `
module.exports = {

    toDBEntity(${lower}) {
        const { id, name, lastname } = ${lower};

        return { id, name, lastname }; // clase del dominio
    }
}
`

}

const getPath = (name) => {
    const { lower } = getSchemaName(name)
    return path.join('dal', 'mappers', `${lower}.mapper.js`)
}

module.exports = {
    getSchema,
    getPath
};
