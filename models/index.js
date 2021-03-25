// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
// activity 21
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
// activity 23
Category.hasMany(Product, {
  // when this fk is active, I get an error when deleting categories with products
  //foreignKey: 'category_id',
  onDelete: 'CASCADE'
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
