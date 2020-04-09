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
const container = require("./api/container");

const app = container.resolve("app");
const db = container.resolve("db");

const { ${className}Entity } = db;

app
    .start()
    .then(async () => {

        console.log();
        
        await ${className}Entity.sequelize.sync();

    })
    .catch(err => {
        console.log(err);
    });
`

}

const getPath = () => {
    return path.join('index.js')
}




module.exports = {
    getSchema,
    getPath
};
