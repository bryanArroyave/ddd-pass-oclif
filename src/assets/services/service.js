const path = require("path")

const getSchemaName = (name = null) => {

    const lower = name.toLowerCase();
    const className = lower.charAt(0).toUpperCase() + lower.slice(1);

    return {
        lower, className
    }
}


const getSchema = (name) => {

    const { className } = getSchemaName(name)

    return `
const BaseService = require("./base.service");
class ${className}Service extends BaseService {
    constructor({ ${className}Business }) {
    super(${className}Business);
    }
}

module.exports = ${className}Service;
    `

}

const getPath = (name) => {
    const { lower } = getSchemaName(name)
    return path.join('services', `${lower}.service.js`)
}

module.exports = {
    getSchema,
    getPath
};

