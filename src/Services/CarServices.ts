import Car, {ICar} from '../Models/Car'

export async function insertCarDb({image,brand,model,year,fuel,color}: ICar): Promise<ICar>{

    const isCar = await Car.findOne({model})
    if(isCar) throw new Error("Car's already on the system")
   
    const newCar = new Car({image,brand,model,year,fuel,color})
    await newCar.save()

    return newCar

}

export async function getCarDb(carId: string): Promise<ICar | null>{

    const isCar = await Car.findById(carId)
    if (!isCar) throw new Error("Car is not on the system")
    return isCar
}


export async function getCarsDb(): Promise<ICar[]>{
    const cars = await Car.find()
    if (!cars) throw new Error("there aren't any cars here!")
    
    return cars
}

export async function deleteCarDb(carId: string): Promise<ICar | null>{
    const isCar = await Car.findByIdAndDelete(carId)
    if(!isCar) throw new Error("Car doesn't exists or is not available anymore")
    return isCar
}


export async function updateCarDb (carId: string, {brand,model,year,fuel,color}: ICar): Promise<ICar>  {

    if (!carId) {
      throw new Error("Car was not found")
    }
  
    const updatedCar = await Car.findByIdAndUpdate(carId, {brand,model,year,fuel,color}, { new: true })
  
    if (!updatedCar) {
      throw new Error('Something was wrong while updating car')
    }
  
    return updatedCar
  
}