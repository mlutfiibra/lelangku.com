'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img_path: DataTypes.STRING,
    location: DataTypes.STRING,
    timeRemain: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    Item.hasMany(models.Bidding, {foreignKey: 'item_id'})
  };
  return Item;
};