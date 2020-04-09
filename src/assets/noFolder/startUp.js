const path = require("path")


const getSchema = () => {

    return `
class StartUp {
    constructor({ server }) {
        this._server = server;
    }
    async start() {
        await this._server.start();
    }
}
    
module.exports = StartUp;
`

}

const getPath = () => {
    return path.join('api', 'startUp.js')
}




module.exports = {
    getSchema,
    getPath
};
