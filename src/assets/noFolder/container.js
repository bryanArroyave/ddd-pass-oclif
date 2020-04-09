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
const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

// routes
const Routes = require("../api/routes");
const ${className}Routes = require("../api/routes/${lower}.routes");


// controllers
const { ${className}Controller } = require("../api/controllers");

// services
const { ${className}Service } = require("../services");

// repositories
const { ${className}Repository } = require("../dal/repositories");

// db
const db = require("../dal/entities");

const container = createContainer();

container
    .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    ${className}Controller: asClass(${className}Controller).singleton(),
    ${className}Routes: asFunction(${className}Routes).singleton()
    }) 
    .register({
    config: asValue(config)
    })
    .register({
    db: asValue(db)
    })
    .register({
    ${className}Service: asClass(${className}Service).singleton(),

    })
    .register({
    ${className}Repository: asClass(${className}Repository).singleton()
    
    })


module.exports = container;
`

}

const getPath = () => {
    return path.join('api', 'container.js')
}




module.exports = {
    getSchema,
    getPath
};
