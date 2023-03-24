// imports
import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'
// import useRouter from './routes/userRoute.js'
// import connectDBs from './config/dbConnect.js'
// import requestIp from 'request-ip'
const app = express()
// dotenv.config()
// // Middleware
// app.use(cors())
// app.use(express.json())
// app.set('trust proxy', true)
// const DATABASE_URL = process.env.SERVER_URl
// const DATABASE_NAME = process.env.SERVER_NAME
// connectDBs(DATABASE_URL, DATABASE_NAME)

// Routes
// app.use('/server', useRouter)
app.get('/', (req, res) => {
  res.send('server check')
})

// listen to port
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Running Server Done', port)
})
