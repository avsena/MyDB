import { Router } from 'express'
import UsuarioController from './app/controllers/UsuarioController';
import CadastroController from './app/controllers/CadastroController';
import UnidadeReferenciaController from './app/controllers/UnidadeReferenciaController';

const routes = new Router();

//usuario

routes.post('/usuario', UsuarioController.create);
routes.get('/usuario/:id', UsuarioController.index);
routes.put('/usuario/:id', UsuarioController.update); //atualizacao - verificar erro
routes.delete('/usuario/:id', UsuarioController.delete);

//cadastro

routes.post('/cadastro', CadastroController.create);
routes.get('/cadastro/:id', CadastroController.index);
routes.put('/cadastro/:id', CadastroController.update); //atualizacao - verificar erro


//unidade referencia

routes.post('/unidades_referencia', UnidadeReferenciaController.create);
routes.get('/unidades_referencia/:id', UnidadeReferenciaController.index);
routes.put('/unidades_referencia/:id', UnidadeReferenciaController.update); //atualizacao - verificar erro


export default routes;