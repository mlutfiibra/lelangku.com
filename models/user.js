'use strict';

const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Format must an email'
        }
      }
    },
    password: DataTypes.STRING,
    img_path: DataTypes.STRING,
    location: DataTypes.STRING,
    address: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    role: DataTypes.STRING,
    salt: DataTypes.STRING,
    isLoggedIn: DataTypes.INTEGER
  }, {
    hooks : {
      afterBulkCreate(user, options) {
        this.generateSaltAndPassword(user)
      },
      beforeCreate(user, option) {
        this.generateSaltAndPassword(user)
      },
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  User.generateSaltAndPassword = function(user) {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(user.dataValues.password, salt);
    user.dataValues.salt = salt
    user.dataValues.password = hash
  }

  User.prototype.comparePasswordWithSalt = function(password, user) {
    return bcrypt.compareSync(password, user.password);
  }

  User.isEmailUnique = function (input){
    return User.findOne({
      where: {
        email: input
      }
    })
    .then(user => {
      if(user) {
        return true
      }else {
        return false        
      }
    })
  }

  return User;
};