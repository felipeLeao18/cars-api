import Car, {ICar} from '../Models/Car'

export async function insertCarDb({brand,model,year,fuel,color}: ICar): Promise<ICar>{
    const isCar = await Car.findOne({model})
    if(isCar) throw new Error("Car's already on the system")
   
    const newCar = new Car({brand,model,year,fuel,color})
    await newCar.save()
    return newCar

}