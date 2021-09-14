import 'reflect-metadata'
import express, {Request,Response, NextFunction} from 'express'
import mongoose from 'mongoose'
import 'express-async-errors'

import {connectionDb} from './Config/Database'
import carRouter from './Routes/CarRoutes'
import userRouter from './Routes/UserRoutes'


const app = express()
mongoose.connect(connectionDb)


app.use(express.json())
app.use('/cars',carRouter)
app.use('/user',userRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.message
      })
    }
  
    return res.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    })
  })
  

app.listen(3000, () => {
    console.log("Server is on")
})