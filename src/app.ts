import express from 'express'
import mongoose from 'mongoose'
import {connectionDb} from './Config/Database'
import carRouter from './Routes/CarRoutes'
const app = express()


mongoose.connect(connectionDb)
app.use(express.json())
app.use('/cars',carRouter)

app.listen(3000, () => {
    console.log("Server is on")
})