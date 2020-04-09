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
const Sequelize = require("sequelize");
const sequelize = require("../../database");


const ${className} = sequelize.define("${lower}s", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    lastname: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}, {
    tableName: "${lower}s",
    timestamps: false
})
module.exports = ${className};
`

}

const getPath = (name) => {
    const { lower } = getSchemaName(name)
    return path.join('dal', 'entities', `${lower}.entity.js`)
}

module.exports = {
    getSchema,
    getPath
};
