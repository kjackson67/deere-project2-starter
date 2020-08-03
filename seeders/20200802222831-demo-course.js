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
          img: "https://tpc.com/deererun/wp-content/uploads/sites/44/2016/07/Hero_Deere-Run-hole-16-Compressed.jpg",
          userId: 1,
        },
        {
          name: "Glynns Creek",
          location: "Scott County Park, IA",
          par: 72,
          img: "https://www.golfcourseranking.com/pics/1951259107.jpg",
          userId: 2,
        },
        {
          name: "Palmer Hills",
          location: "Bettendorf, IA",
          par: 72,
          img: "http://palmerhillsgolf.com/wp-content/uploads/2016/03/1375208_10151749520047144_541604284_n.jpg",
          userId: 3,
        },
        {
          name: "Golfmohr",
          location: "East Moline",
          par: 72,
          img: "https://www.golfmohr.com/images/slideshow/slide1.jpg",
          userId: 4,
        },
      ], {});
  },
/**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};