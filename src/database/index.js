import Sequelize from 'sequelize'
import databaseConfig from '../config/database'

// models
import User from '../app/models/Users'
import File from '../app/models/Files'

const models = [User, File]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)
    models.map(model => model.init(this.connection))
  }
}

export default new Database()
