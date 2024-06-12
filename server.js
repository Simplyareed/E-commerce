const express = require('express');
console.log('importing routes');
const routes = require('C:/Users/Adam/Documents/OSU-projects/E-commerce/Develop/routes');
console.log('Routes imported successfully', routes);
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
