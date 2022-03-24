const loginModel = require('../models/tb_usuarios');
const jwt = require('jsonwebtoken'); //concede autorização para quem conhece o "segredo"  token posso acessar
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

class loginController{
    
    // Teste de comunicação com o controller
	async store(req, res){
		res.json({status: 'success', message: 'Comunicação com back-end realizada.'});
	}
    //login

    async store(req,res){
        const schema = Yup.object({
            login: Yup.string().required(),
            senha: Yup.string().required().min(6),
        });

        if (!(await schema.isValid(req.body))){
            return res.status(400).json({error: "Falha no Login."});
        }

        if (userExist){
            return res.status(400).json({error: "Já existe um usuário com essa senha."});

        }

        const {id, login, senha} = await loginModel.create(req.body);
        return res.json({id, login, senha});
        
    }
}

