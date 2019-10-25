import Sequelize from 'sequelize'
import databaseConfig from '../config/database'

// models
import user from '../app/models/Users'

const models = [user]

class Data {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(databaseConfig)
        models.map(model => model.init(this.connection))
    }
}

export default new Data()
