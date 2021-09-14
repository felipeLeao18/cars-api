import {Router} from 'express'
import {insertCar} from '../Controllers/CarController'

const router = Router();


router.route('/').post(insertCar)

export default router
