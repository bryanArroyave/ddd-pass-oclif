const path = require("path")

const getSchema = () => {

    return `
module.exports = {
    REPO: "db"
}
`

}

const getPath = () => {
    return path.join('dal','repositories' ,`config.js`)
}

module.exports = {
    getSchema,
    getPath
};
