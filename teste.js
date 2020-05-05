const { Produto, Pedido } = require("./models");

async function criarPedido(listaDeProdutos) {
  const produtos = await Produto.findAll({
    where: {
      id_produto: listaDeProdutos,
    },
  });

  const pedido = await Pedido.create({
    status: "Criado",
    fk_usuario: 1,
  });

  pedido.setItensPedido(produtos);
}

criarPedido([1, 2]);
