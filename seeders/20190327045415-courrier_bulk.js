'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Courriers', [{
      name: 'JNE',
      price: 3000,
      img_path: null,
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'Tiki',
      price: 2500,
      img_path: null,
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: 'GoJek',
      price: 5000,
      img_path: null,
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Courriers', null, {});
  }
};
