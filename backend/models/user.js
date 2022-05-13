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

<<<<<<< HEAD
export default user
=======
export default user
>>>>>>> 12b14bb472c245995bec94b68c46e86bae8461c9
