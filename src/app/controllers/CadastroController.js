import Cadastro from "../models/Cadastro";

class CadastroController {

    async create(req, res) {
        const { nome, nome_social, num_cartao_nacional_saude, cpf, data_nascimento, raca, naturalidade, endereco, bairro, cidade, estado, cep } = req.body;

        const createdCadastro = await Cadastro.create(req.body);

        return res.json(createdCadastro);
    }

    async index(req, res){
         const cadastro = await Cadastro.findByPk(req.params.id);

         if(!cadastro){

            return res.status(404).json({error: 'user not found'});
         }

         return res.json(cadastro);
    }

    //para atualizar
    async update(req, res){
        const cadastro = await Cadastro.findByPk(req.params.id);

        if(!cadastro){

           return res.status(404).json({error: 'user not found'});
        }

        await Cadastro.update(req.body); //verificar se está dando erro
        
        return res.json(cadastro);
   }

}

export default new CadastroController();