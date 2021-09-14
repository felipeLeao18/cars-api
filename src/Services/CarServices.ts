import Car, {ICar} from '../Models/Car'

export async function insertCarDb({brand,model,year,fuel,color}: ICar): Promise<ICar>{

    const isCar = await Car.findOne({model})
    if(isCar) throw new Error("Car's already on the system")
   
    const newCar = new Car({brand,model,year,fuel,color})
    await newCar.save()
    return newCar

}

export async function getCarDb(carId: string): Promise<ICar | null>{

    const isCar = await Car.findById(carId)
    if (!isCar) throw new Error("Car is not on the system")
    return isCar
}