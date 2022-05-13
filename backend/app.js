import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './routes/user-routes.js'
const app = express()
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/', userRouter)
const PORT = 9000
const URL =
  'mongodb+srv://admin:admin1234@cluster0.wiyya.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port: ${PORT}`)
    })
  })
  .catch(error => {
    console.log('Error: ', error.message)
  })