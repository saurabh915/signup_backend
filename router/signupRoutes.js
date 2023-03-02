import express from 'express'
import { userSignup } from '../Controller/signupController.js'

const signupRouter = express.Router()

signupRouter.post('/signup', userSignup)

export default signupRouter