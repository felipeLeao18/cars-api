import {Router} from 'express'
import {createUser} from '../Controllers/UserController'
import {LoginController} from '../Controllers/LoginController'

const loginController = new LoginController()

const router = Router();

router.route('/').post(createUser)
router.route('/login').post(loginController.handle)

export default router
