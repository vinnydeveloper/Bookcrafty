module.exports = (sequelize, DataType) => {
  const Produto = sequelize.define(
    "Produto",
    {
      id_produto: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataType.STRING,
      descricao: DataType.STRING,
      imagem: DataType.STRING,
      preco: DataType.DECIMAL,
      fk_categoria: {
        type: DataType.INTEGER,
      },
    },
    {
      tableName: "produto",
      timestamps: false,
    }
  );

  Produto.associate = (listaDeModelos) => {
    Produto.belongsTo(listaDeModelos.Categoria, {
      foreignKey: "fk_categoria",
      as: "categoria",
    });

    Produto.belongsToMany(listaDeModelos.Pedido, {
      foreignKey: "fk_produto",
      as: "pedidos",
      through: listaDeModelos.ItemPedido,
    });
  };

  return Produto;
};
