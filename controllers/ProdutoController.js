const Sequelize = require('sequelize')
const config = require('../config/database')
const {Produto, Categoria} = require('../models')
const ProdutoController = {
    index: async (req, res)=>{
        const produtos = await Produto.findAll({
            include:{
                model:Categoria,
                as:'categoria',
                required:true
            }
        });
         return res.render('produtos', {produtos})
    }
}

module.exports = ProdutoController