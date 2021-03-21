const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

// added activity 3
// import models to sync tables with database
const Category = require('./models/Category');
const Product = require('./models/Product');
const Tag = require('./models/Tag');
const ProductTag = require('./models/ProductTag');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// // sync sequelize models to the database, then turn on the server

// original code
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

// from activity 1
// sequelize.sync().then(() => {
//   app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
// });

// from activity 3

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
