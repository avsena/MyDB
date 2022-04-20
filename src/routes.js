import { Router } from 'express'
import UsuarioController from './app/controllers/UsuarioController';

const routes = new Router();

//usuario

routes.post('/usuario', UsuarioController.create);
routes.get('/usuario/:id', UsuarioController.index);


export default routes;