// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // foreign key in the Product model
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', //  foreign key 
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, 
  foreignKey: 'product_id', // The foreign key in the Product model
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, 
  foreignKey: 'tag_id', // foreign key in the Tag model
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
