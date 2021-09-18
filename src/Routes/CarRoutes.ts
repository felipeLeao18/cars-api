import {Router} from 'express'
import {insertCar,getCar,getCars,deleteCar, updateCar} from '../Controllers/CarController'

const router = Router();


router.route('/').post(insertCar).get(getCars)
router.route('/:carId').get(getCar).delete(deleteCar).patch(updateCar)

export default router
