const database = require("../config/database");

exports.checkLogin = (userName, password, callbackQuery) => {
  database.connection.query(
    `select * from user where name ="${userName}" and password ="${password}"`,
    (error, result, fields) => {
      if (!error) {
        callbackQuery(result);
      } else {
        console.log(error);
      }
    }
  );
};

exports.getUserId = (userId, callbackQuery) => {
  database.connection.query(
    `select * from user where name ="${userId}"`,
    (error, result, fields) => {
      if (!error) {
        callbackQuery(result);
      } else {
        console.log(error);
      }
    }
  );
};

exports.registerUser = (userName, password, callbackQuery) => {
  database.connection.query(
    `insert into user(id,name) values (null,${userName})`,
    (error, result, fields) => {
      if (!error) {
        callbackQuery(result);
      } else {
        console.log(error);
      }
    }
  );
};
