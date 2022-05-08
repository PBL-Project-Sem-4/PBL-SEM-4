import express from 'express'
import { authenticateUser, addUser } from '../controller/user-controller.js'

const userRouter = express.Router()

userRouter.post('/loginUser', authenticateUser)
userRouter.post('/signinUser', addUser)
export default userRouter
