import Usuario from "../models/Usuario";

class UsuarioController {

   //criando login
   async create(req, res) {
      const { login, senha } = req.body;

      if (!login || !senha) return res.status(400).json({ error: 'Bad Request' })

      const createdUsario = await Usuario.create(req.body);

      return res.json(createdUsario);
   }

   //procurando login 
   async index(req, res) {
      const login = await Usuario.findByPk(req.params.id);

      if (!login) {

         return res.status(404).json({ error: 'login not found' });
      }

      return res.json(login);
   }

   //atualizando login
   async update(req, res) {
      const login = await Usuario.findByPk(req.params.id);

      if (!login) {

         return res.status(404).json({ error: 'Login updated' });
      }

      await usuario.update(req.body); //verificar se está dando erro

      return res.json(login);
   }

   //deletando login
   async delete(req, res) {
      const login = await Usuario.findByPk(req.params.id);

      if (!login) {

         return res.status(404).json({ error: 'Login deleted!' });
      }

      await usuario.destroy();

      return res.status(204).json();//void 
   }


}

export default new UsuarioController();