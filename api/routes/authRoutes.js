import express from 'express'
import { login, register } from '../controllers/authController.js'
import createClientValidator from '../middlewares/createClientValidator.js'
import loginValidator  from '../middlewares/loginValidator.js'
const router = express.Router()

/**
 * /login
 * /register
 */

router.post ('/register',createClientValidator,register)
router.post ('/login',loginValidator,login)

export default router