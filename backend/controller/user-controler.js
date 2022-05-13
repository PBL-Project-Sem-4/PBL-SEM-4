import user from '../models/user.js'

export const authenticateUser = async (request, response) => {
  try {
    let userInfo = request.body
    console.log(userInfo)
    let Message = ''
    await user
      .findOne({ Username: userInfo.Username })
      .then(data => {
        console.log(data)
        if (!data) {
          Message = 'User not found'
        } else {
          if (data.Password === userInfo.Password) {
            Message = 'User authenticated!'
          } else {
            Message = 'Wrong password,Try again!'
          }
        }
      })
      .then(() => {
        response.json({
          username: userInfo.Username,
          message: Message
        })
      })
  } catch (error) {
    response.json({ message: error.message })
  }
}

export const addUser = async (request, response) => {
  const c = request.body
  const newUser = new user(c)
  try {
    await newUser.save()
    response.json(newUser)
  } catch (error) {
    response.json({ message: error.message })
  }
}