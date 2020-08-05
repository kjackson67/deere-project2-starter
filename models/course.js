'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsTo(models.User, { foreignKey: "userId" });
      Course.belongsToMany(models.Users, {
        through: "Round",
        foreignKey: "name",
        otherKey: "courseName",
      });
    }
  };
        // define association here

  Course.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    par: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};