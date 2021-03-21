const { Model, DataTypes, INTEGER, STRING } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  // define columns
  {
    id: {
      DataTypes: INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    tag_name: {
      DataTypes: STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
