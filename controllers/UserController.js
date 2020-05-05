const { Usuario } = require('../models');
const Sequelize =  require('sequelize')
const Op = Sequelize.Op

const UserController= {
    index: async (req, res)=>{
            let { page=1 } = req.query
        let {count:total, rows:users} = await Usuario.findAndCountAll({
            limit:5,
            offset: (page - 1) * 5
        });

        
        
        let totalPagina = Math.round(total/5)
        return res.render('usuarios', {users, totalPagina})
    },

    create:(req, res)=>{
        return res.render('cadastroUsuario')
    },
    store: async (req, res)=>{
        const { nome, email , senha} = req.body;
        
        const resultado = await Usuario.create({
            nome,
            email,
            senha
        });

        console.log(resultado)

        return res.redirect('/users')
    },

    edit:async (req, res)=>{
        const {id} = req.params;

        const usuario = await Usuario.findByPk(id);

        return res.render('editarUsuario', {usuario})
    },
    update: async (req, res)=>{
       const {id} = req.params;
       const {nome, email, senha} = req.body;

       const resultado = await Usuario.update({
           nome,
           email,
           senha
       },
       {
           where:{
               id_usuario:id
           }
       })

       console.log(resultado)
       
       return res.redirect('/users')
    },

    destroy:  async(req, res)=>{
        const {id} = req.params

        const resultado = await Usuario.destroy({
            where:{
               id_usuario:id 
            }
        })
        
        console.log(resultado)
        
        res.redirect('/users')
    },

    findById: async (req, res)=>{
        let {id} = req.params;


        let user = await Usuario.findOne({
            where:{
                id_usuario:id
            }
        })

        return res.render('viewUsuario', {user})

    },
    search: async (req, res)=>{
        let {key} = req.query

        let users = await Usuario.findAll({
            where:{
                nome:{
                    [Op.like]:`%${key}%`
                }
            },
            order:[
                ['id_usuario', 'ASC']
            ]
            
        });

        return res.render('usuarios', {users})
    },

    agregadoras: async (req, res)=>{
        let total = await Usuario.sum('id_usuario');

        res.send("A som é: " + total)
    },

    bulkCreate: async (req, res)=>{
        const listaDeUsuarios = [
            {nome:"Teste 1", email:'teste1@email.com', senha:'123456'},
            {nome:"Teste 2", email:'teste2@email.com', senha:'223456'},
            {nome:"Teste 3", email:'teste3@email.com', senha:'223456'},
            {nome:"Teste 4", email:'teste4@email.com', senha:'123456'},
            
        ]

        const resultado = await Usuario.bulkCreate(listaDeUsuarios);
        console.log(resultado)

        res.send("Criados")
    }
}

module.exports = UserController