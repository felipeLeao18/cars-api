import { Request, Response } from "express";
import { insertCarDb, getCarDb, getCarsDb, deleteCarDb, updateCarDb } from "../Services/CarServices";

export async function insertCar(
  req: Request,
  res: Response
): Promise<Response> {
  const car = await insertCarDb(req.body);
  return res.json({
    message: "Car posted",
    car,
  });
}

export async function getCar(req: Request, res: Response): Promise<Response> {
  const car = await getCarDb(req.params.carId);
  return res.json({
    message: "Car",
    car,
  });
}

export async function getCars(req: Request, res: Response): Promise<Response> {
  const cars = await getCarsDb();

  return res.json({
    message: "All Cars are here",
    cars: cars,
  });
}

export async function deleteCar(req: Request, res: Response): Promise <Response>{

    const car = await deleteCarDb(req.params.carId)
    return res.json({
        message: 'Car Deleted',
        car
    })

}

export async function updateCar(req: Request, res: Response): Promise<Response> {
  const newCar = await updateCarDb(req.params.carId,req.body)

  return res.json({
    message: 'Car updated',
    newCar
  })
  
}
