// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
// activity 21
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Categories have many Products
// activity 23
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
// activity 28
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  }
});

// Tags belongToMany Products (through ProductTag)
// activity 28
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
