const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  // define columns
  {
    id: {
      DataTypes: INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_id: {
      DataTypes: INTEGER,
      // refernece product model's id
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id:{
      DataTypes: INTEGER,
      // refernece tag model's id
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
