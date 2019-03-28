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
    return queryInterface.bulkInsert('Biddings', [{
      user_id: 1,
      item_id: 3,
      current_price: 13000000,
      createdAt: new Date,
      updatedAt: new Date
    },{
      user_id: 2,
      item_id: 3,
      current_price: 15000000,
      createdAt: new Date,
      updatedAt: new Date
    },{
      user_id: 3,
      item_id: 3,
      current_price: 18000000,
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
    return queryInterface.bulkDelete('Biddings', null, {});
  }
};