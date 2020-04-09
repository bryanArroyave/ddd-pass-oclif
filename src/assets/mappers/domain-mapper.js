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
const { ${className} } = require("../");

module.exports = {

    toDomainEntity(${lower}) {
        const { id, name, lastname } = ${lower};

        return new ${className}({ id, name, lastname }); // clase del dominio
    }
}
`

}

const getPath = (name) => {
    const { lower } = getSchemaName(name)
    return path.join('domain', 'mappers', `${lower}.mapper.js`)
}

module.exports = {
    getSchema,
    getPath
};
