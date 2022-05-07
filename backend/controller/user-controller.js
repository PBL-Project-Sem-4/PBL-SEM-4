import user from '../models/user'

export const getUser = async (request, response) => {
  try {
    let c = await user.findOne()
    response.json(c)
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
