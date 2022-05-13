<<<<<<< HEAD

import express from 'express'
import { authenticateUser, addUser } from '../controller/user-controler.js'
=======
import express from 'express'
import { authenticateUser, addUser } from '../controller/user-controller.js'
>>>>>>> 12b14bb472c245995bec94b68c46e86bae8461c9

const userRouter = express.Router()

userRouter.post('/loginUser', authenticateUser)
userRouter.post('/signinUser', addUser)
<<<<<<< HEAD
export default userRouter
=======
export default userRouter
>>>>>>> 12b14bb472c245995bec94b68c46e86bae8461c9
