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
      CourseModel.belongsToMany(models.User, {
        through: "PlayerCourse",
        foreignKey: "courseId",
        otherKey: "userId"
      });
    }
  };

  Course.init({
    courseName: DataTypes.STRING,
    location: DataTypes.STRING,
    par: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};