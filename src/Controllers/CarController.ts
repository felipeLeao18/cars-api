import {Request, Response } from 'express';
import {
insertCarDb
} from '../Services/CarServices'

export async function insertCar(req:Request, res: Response): Promise<Response>{
    const car = await insertCarDb(req.body)
    return res.json({
        message: 'Car posted',
        car
    })

}