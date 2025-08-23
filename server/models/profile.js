'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'UserId', onDelete: 'SET NULL', onUpdate: 'CASCADE' })
      Profile.belongsTo(models.Role, { foreignKey: 'RoleId', onDelete: 'SET NULL', onUpdate: 'CASCADE' })
      Profile.hasMany(models.Coffee, { foreignKey: 'ProfileId' })
    }
  }
  Profile.init({
    username: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    fullname: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    RoleId: DataTypes.UUID,
    UserId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Profile',
  })
  return Profile
}