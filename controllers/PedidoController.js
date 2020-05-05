
const {Produto, Pedido} = require('../models')
const PedidoController = {
    index: async (req, res)=>{
            const pedidos = await Pedido.findAll();
         return res.render('pedidos', {pedidos})
    },
    showProducts: async (req, res)=>{
        const {id} = req.params;

        const pedido = await Pedido.findOne({
            where:{
                id_pedido:id
            },
            include:{
                 model: Produto,
                 as:'itensPedido',
                 required:true
            }
        })

        console.log(pedido)
        
        return res.render('pedidosDetalhes', {pedido})
    }
}

module.exports = PedidoController