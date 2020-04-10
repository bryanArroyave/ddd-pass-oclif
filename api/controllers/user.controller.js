
class UserController {

    constructor({ UserService }) {

        this._userService = UserService;

    }

    async getUser(req, res) {

        const { body } = req;

        const users = await this._userService.getUser(body);
        return res.send({
            err: false,
            payload: users
        });
    }


    async createUser(req, res) {
        const { body } = req;

        try {
            const createdUser = await this._userService.createUser(body);
            return res.send({
                err: false,
                payload: createdUser
            });
        } catch (e) {

            console.log(e);
            return res.status(500).json(
                {
                    err: true,
                    payload: null
                }
            )

        }

    }

    async getUsers(req, res) {


        const users = await this._userService.getUsers();
        return res.send({
            err: false,
            payload: users
        });
    }
    async updateUser(req, res) {
        return res.send({ msg: "actualizar Catador" });
    }

    async deleteUser(req, res) {
        return res.send({ msg: "borrar Catador" });
    }
}

module.exports =UserController;