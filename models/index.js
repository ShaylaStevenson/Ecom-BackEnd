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
Category.hasMany(Product,{
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
// activity 28
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    foreignKey: 'product_id',
  },
});

// Tags belongToMany Products (through ProductTag)
// activity 28
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    foreignKey: 'tag_id',
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
