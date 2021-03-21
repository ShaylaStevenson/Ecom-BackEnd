// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// //do I need this business?
// Reader.hasOne(LibraryCard, {
//   foreignKey: 'reader_id',
//   // When we delete a Reader, make sure to also delete the associated Library Card.
//   onDelete: 'CASCADE',
// });

// Products belongsTo Category
// activity 21
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
// activity 23
Category.hasMany(Product,{
  foreignKey: 'category_id',
  onDelete: 'Cascade',
})

// Products belongToMany Tags (through ProductTag)
// activity 28, mini project
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    //unique: false
  },
  as: 'tags_by_product'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    //unique: false
  },
  as: 'products_by_tag'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
