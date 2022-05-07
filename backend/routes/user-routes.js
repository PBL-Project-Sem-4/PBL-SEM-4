import express from 'express'
import { getUser, addUser } from '../controller/user-controller'

const user = express.Router()

user.post('/login', getUser)
user.post('/signin', addUser)
export default user
