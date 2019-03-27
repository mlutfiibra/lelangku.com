'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    img_path: DataTypes.STRING,
    location: DataTypes.STRING,
    address: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    role: DataTypes.STRING,
    isLoggedIn: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};