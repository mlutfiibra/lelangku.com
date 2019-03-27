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
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Rumah Koruptor',
        price: 1000000000,
        img_path: null,
        location: 'Bandung',
        timeRemain: 86400,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Vespa Garuda',
        price: 150000,
        img_path: null,
        location: 'Yogyakarta',
        timeRemain: 86400,
        createdAt: new Date,
        updatedAt: new Date
  
      },
      {
        name: 'Sepeda Ontel Gazelle',
        price: 12000000,
        img_path: null,
        location: 'Bandung',
        timeRemain: 36400,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Uang Lama',
        price: 100000,
        img_path: null,
        location: 'Madiun',
        timeRemain: 76400,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Keyboard Gaming',
        price: 300000,
        img_path: null,
        location: 'Jakarta',
        timeRemain: 86400,
        createdAt: new Date,
        updatedAt: new Date
  
      },
      {
        name: 'Perangko Kuno',
        price: 5000000,
        img_path: null,
        location: 'Bandung',
        timeRemain: 86400,
        createdAt: new Date,
        updatedAt: new Date
  
      },
      {
        name: 'Mobil Koruptor',
        price: 300000000,
        img_path: null,
        location: 'Jakarta',
        timeRemain: 86400,
        createdAt: new Date,
        updatedAt: new Date
  
      },
      {
        name: 'Cincin 24 Karat',
        price: 250000000,
        img_path: null,
        location: 'Jakarta',
        timeRemain: 86400,
        createdAt: new Date,
        updatedAt: new Date
  
      },
      {
        name: 'Rumah Mewah',
        price: 1000000000,
        img_path: null,
        location: 'Depok',
        timeRemain: 86400,
        createdAt: new Date,
        updatedAt: new Date
  
      },
      {
        name: 'Rumah Sangat Mewah',
        price: 3000000000,
        img_path: null,
        location: 'Jakarta',
        timeRemain: 86400,
        createdAt: new Date,
        updatedAt: new Date
  
      },
      {
        name: 'Pesawat Pribadi',
        price: 30000000000,
        img_path: null,
        location: 'Jakarta',
        timeRemain: 86400,
        createdAt: new Date,
        updatedAt: new Date
  
      },
      {
        name: 'Laptop',
        price: 3000000,
        img_path: null,
        location: 'Jakarta',
        timeRemain: 86400,
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
     return queryInterface.bulkDelete('Items', null, {});
  }
};