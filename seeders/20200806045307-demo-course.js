'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Courses",
      [
        {                           
          name: "TPC Deere Run",
          location: "Silvis, IL",
          par: 72,
      },
      {
          name: "Glynns Creek",
          location: "Scott County Park, IA",
          par: 72,
      },
      {
          name: "Palmer Hills",
          location: "Bettendorf, IA",
          par: 72,
      },
      {
          name: "Golfmohr",
          location: "East Moline",
          par: 72,
        },
  ], {});
},
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};