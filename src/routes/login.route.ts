import express from 'express';
import loginController from '../controllers/login.controller';

const routerLogin = express.Router();

routerLogin.post('/', loginController.login);

export default routerLogin;