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
const { attributes } = require("structure");

const ${className} = attributes({
    name: {
        type: String,
        required: true
    }, lastname: {
        type: String
    }
})(class ${className} {
    getCompleteName() {

        return this.name + " " + this.lastname;
    }

});

module.exports = ${className};
`

}

const getPath = (name) => {
    const { lower } = getSchemaName(name)
    return path.join('domain', `${lower}.domain.js`)
}


module.exports = {
    getSchema,
    getPath
};
