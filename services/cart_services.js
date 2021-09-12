const database = require("../config/database");

exports.getAllCart = (idLogin, callbackQuery) => {
  database.connection.query(
    `select * from cart where user_id =${idLogin}`,
    (error, result, fields) => {
      if (!error) {
        callbackQuery(result);
      } else {
        console.log(error);
      }
    }
  );
};

exports.addToCart = (productId, userId, callbackQuery) => {
  database.connection.query(
    `INSERT INTO cart (id, quantity,product_id, user_id ) VALUES (NULL, 1, ${productId}, ${userId});`,
    (error, result, fields) => {
      if (!error) {
        callbackQuery(result);
      } else {
        console.log(error);
      }
    }
  );
};

exports.deleteCartById = (cartId, callbackQuery) => {
  database.connect();
  database.connection.query(
    `delete from cart where id = ${cartId}`,
    (error, result, fields) => {
      if (!error) {
        callbackQuery(result);
      } else {
        console.log(error);
      }
    }
  );
};

exports.updateCartById = (cartId, quantity, callbackQuery) => {
  database.connect();
  database.connection.query(
    `update cart set quantity =${quantity} where id = ${cartId}`,
    (error, result, fields) => {
      if (!error) {
        callbackQuery(result);
      } else {
        console.log(error);
      }
    }
  );
};
