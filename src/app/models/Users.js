import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcrypt'

class Users extends Model {
    static init(connection) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            },
            {
                sequelize: connection,
            }
        )

        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8)
            }
        })
    }
}

export default Users
