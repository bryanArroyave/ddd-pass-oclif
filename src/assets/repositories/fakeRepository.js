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
function ${className}(id, name, lastname) {

    return { id, name, lastname }
}



class ${className}Repository {
    constructor() {
        this.${lower}s = [];

        this.${lower}s.push(new ${className}("1", "name1", "lastname1"));
        this.${lower}s.push(new ${className}("2", "name2", "lastname2"));
        this.${lower}s.push(new ${className}("3", "name3", "lastname3"));
        this.${lower}s.push(new ${className}("4", "name4", "lastname4"));

    }


    get${className}s() {

        let c = this.${lower}s;
        return this.${lower}s;
    }
    create${className}(${lower}) {
        this.${lower}s.push(${lower})
        return { msg: "201", ${lower} };
    }
    get${className}(id) {

        this.${lower}s.forEach(catador => {
            if (catador.id === id) {
                return { msg: "200", catador };
            }

        });
        return { msg: "404" };
    }
}

module.exports = ${className}Repository;
`

}

const getPath = (name) => {
    const { lower } = getSchemaName(name)
    return path.join('dal', 'repositories','fakeRepositories' ,`${lower}.repository.js`)
}

module.exports = {
    getSchema,
    getPath
};
