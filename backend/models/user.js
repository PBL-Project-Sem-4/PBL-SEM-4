import mongoose from 'mongoose'

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

const user = mongoose.model('user', userSchema)

export default user
