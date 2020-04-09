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
class ${className}Repository {
    constructor({ db }) {
        this._db = db.${className}Entity;
    }

    get${className}s() {
        return this._db.findAll();
    }
    create${className}(${lower}) {

        return this._db.create(${lower});
    }
    get${className}(id) {
        return this._db.findOne(id);
    }
}

module.exports = ${className}Repository;
`

}

const getPath = (name) => {
    const { lower } = getSchemaName(name)
    return path.join('dal', 'repositories','dbRepositories', `${lower}.repository.js`)
}

module.exports = {
    getSchema,
    getPath
};
