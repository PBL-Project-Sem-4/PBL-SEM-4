import mongoose from 'mongoose'
import autoIncrement, { initialize } from 'mongoose-auto-increment'

const userSchema = mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
})

autoIncrement.initialize(mongoose.connection)
userSchema.plugin(autoIncrement.plugin, 'user')
const user = mongoose.model('user', userSchema)

export default user
