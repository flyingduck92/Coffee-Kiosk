'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Coffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coffee.belongsTo(models.Profile, { foreignKey: 'ProfileId', onDelete: 'SET NULL', onUpdate: 'CASCADE' })
      Coffee.belongsTo(models.Type, { foreignKey: 'TypeId', onDelete: 'SET NULL', onUpdate: 'CASCADE' })
    }
  }
  Coffee.init({
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    TypeId: DataTypes.UUID,
    ProfileId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Coffee',
  })
  return Coffee
}