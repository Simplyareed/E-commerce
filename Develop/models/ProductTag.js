const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      allowNull: false, // will not allow NULL values
      primaryKey: true, // Set as the primary key
      autoIncrement: true, // Automatically increment the value 
    },
    tag_id: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      references: {
        model: "tag", // Reference the 'tag' table
        key: "id", 
      },
    },
    product_id: {
      type: DataTypes.INTEGER, 
      references: {
        model: "product", // Reference the 'product' table
        key: "id", 
      },
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
