const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // Sets the data type to INTEGER
      allowNull: false, // will not let values be NULL 
      primaryKey: true, // Set as the primary key
      autoIncrement: true, // Automatically increment the value for each new record
    },
    // Define the 'category_name' column
    category_name: {
      type: DataTypes.STRING, // Set the data type to STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
