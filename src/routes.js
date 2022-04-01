import { Router } from 'express'
import loginController from './app/controllers/loginController';

const routes = new Router ();

// cadastro

routes.post('/login', loginController.create);


export default routes 