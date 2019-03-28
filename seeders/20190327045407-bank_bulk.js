'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Banks', [{
        name: 'BNI',
        token: 21443,
        img_path : null,
        createdAt: new Date(),
        updatedAt : new Date()
      },{
        name: 'Mandiri',
        token: 22121,
        img_path : null,
        createdAt: new Date(),
        updatedAt : new Date()
      },{
        name: 'BRI',
        token: 23221,
        img_path : null,
        createdAt: new Date(),
        updatedAt : new Date()
      },{
        name: 'CIMB Niaga',
        token: 24334,
        img_path : null,
        createdAt: new Date(),
        updatedAt : new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Banks', null, {});
    
  }
};
