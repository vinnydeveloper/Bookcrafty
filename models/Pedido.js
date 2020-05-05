module.exports = (sequelize, DataType) => {
  const Pedido = sequelize.define(
    "Pedido",
    {
      id_pedido: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: DataType.STRING,
      fk_usuario: DataType.INTEGER,
    },
    {
      tableName: "pedido",
      timestamps: false,
    }
  );

  Pedido.associate = (listaDeModelos) => {
    Pedido.belongsToMany(listaDeModelos.Produto, {
      foreignKey: "fk_pedido",
      as: "itensPedido",
      through: listaDeModelos.ItemPedido,
    });
  };

  return Pedido;
};
