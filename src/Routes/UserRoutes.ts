import {Router} from 'express'
import {createUser} from '../Controllers/UserController'

const router = Router();

router.route('/').post(createUser)

export default router
