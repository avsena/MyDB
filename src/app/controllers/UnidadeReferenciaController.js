import UnidadeReferencia from "../models/UnidadeReferencia";

class UnidadeReferenciaController {

    async create(req, res) {
        const { descricao } = req.body;

        if(!descricao){
            return res.status(404).json({erro: 'nao tem descricao'});
        }

        const createdUnidadeReferencia = await UnidadeReferencia.create(req.body);

        return res.json(createdUnidadeReferencia);
    }

    async index(req, res){
         const unidadeReferencia = await UnidadeReferencia.findByPk(req.params.id);

         if(!unidadeReferencia){

            return res.status(404).json({error: 'Unidade referencia not found'});
         }

         return res.json(unidadeReferencia);
    }

    //para atualizar
    async update(req, res){
        const unidadeReferencia = await UnidadeReferencia.findByPk(req.params.id);

        if(!unidadeReferencia){

           return res.status(404).json({error: 'unidade referencia not found'});
        }

        await UnidadeReferencia.update(req.body); //verificar se está dando erro
        
        return res.json(unidadeReferencia);
   }

}

export default new UnidadeReferenciaController();