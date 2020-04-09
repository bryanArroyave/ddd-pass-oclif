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
const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function({ ${className}Routes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

  apiRoute.use("/${lower}", ${className}Routes);

  router.use("/api", apiRoute);

  return router;
};
`

}

const getPath = () => {
    return path.join('api', 'routes', 'index.js')
}




module.exports = {
    getSchema,
    getPath
};


