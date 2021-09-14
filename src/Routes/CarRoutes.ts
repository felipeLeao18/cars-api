import {Router} from 'express'
import {insertCar,getCar,getCars} from '../Controllers/CarController'

const router = Router();


router.route('/').post(insertCar).get(getCars)
router.route('/:carId').get(getCar)

export default router
