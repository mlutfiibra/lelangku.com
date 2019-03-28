'use strict';
module.exports = (sequelize, DataTypes) => {
  const Courrier = sequelize.define('Courrier', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img_path: DataTypes.STRING
  }, {});
  Courrier.associate = function(models) {
    // associations can be defined here
  };
  return Courrier;
};