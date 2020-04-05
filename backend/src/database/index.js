import Sequelize from 'sequelize'
import databaseConfig from '../config/database'
import mongoose from 'mongoose'

// models
import User from '../app/models/Users'
import File from '../app/models/Files'
import Appointment from '../app/models/Appointments'

const models = [User, File, Appointment]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)
    models.map(model => model.init(this.connection))
    models.map(
      model => model.associate && model.associate(this.connection.models)
    )
    // console.log(this.connection.models)
  }

  mongo() {
    this.mongoConnetion = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    })
  }
}

export default new Database()
