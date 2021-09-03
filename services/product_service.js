const database = require("../config/database");

const SQL_SELECT_PRODUCTS = "select * from product";

exports.getAllProduct = (callbackQuery) => {
  database.connect();
  database.connection.query(SQL_SELECT_PRODUCTS, (error, result, fields) => {
    if (!error) {
      callbackQuery(result);
    } else {
      console.log(error);
    }
  });
};

exports.getProductById = (productId, callbackQuery) => {
  database.connect();
  database.connection.query(
    `select * from product where id = ${productId}`,
    (error, result, fields) => {
      if (!error) {
        callbackQuery(result);
      } else {
        console.log(error);
      }
    }
  );
};

exports.updateProductId = (productId, callbackQuery) => {
  database.connect();
  database.connection.query(
    `update product set name ="Tan Nguyen" where id = ${productId}`,
    (error, result, fields) => {
      if (!error) {
        callbackQuery(result);
      } else {
        console.log(error);
      }
    }
  );
};
