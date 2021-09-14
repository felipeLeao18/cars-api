import {Router} from 'express'
import {insertCar,getCar} from '../Controllers/CarController'

const router = Router();


router.route('/').post(insertCar)
router.route('/:carId').get(getCar)

export default router
