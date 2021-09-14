import {Request, Response } from 'express';
import {
insertCarDb,getCarDb
} from '../Services/CarServices'

export async function insertCar(req:Request, res: Response): Promise<Response>{
    const car = await insertCarDb(req.body)
    return res.json({
        message: 'Car posted',
        car
    })

}

export async function getCar(req: Request, res: Response): Promise<Response>{
    const car = await getCarDb(req.params.carId)
    return res.json({
        message: 'car',
        car
    })
}