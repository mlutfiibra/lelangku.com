'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bidding = sequelize.define('Bidding', {
    user_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    current_price: DataTypes.INTEGER,
    winner: DataTypes.STRING
  }, {});
  Bidding.associate = function(models) {
    // associations can be defined here
    models.User.belongsToMany(models.Item, {through: models.Bidding, foreignKey: 'user_id'})
    models.Item.belongsToMany(models.User, {through: models.Bidding, foreignKey: 'item_id'})
  };
  return Bidding;
};