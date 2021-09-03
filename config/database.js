const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "dbsaleproduct",
});

const connect = () => {
  connection.connect((error) => {
    if (!error) {
      console.log("Database is connected");
    } else {
      console.log("Database connect fail error");
    }
  });
};

const closeDB = () => {
  connection.end((error) => {
    if (!error) {
      console.log("Close database connection");
    }
  });
};

exports.getAllUser = (callbackQuery) => {
  connection.query("SELECT * FROM catalog", (error, result, fields) => {
    if (!error) {
      callbackQuery(result);
    } else {
      console.log(error);
    }
  });
};

exports.connect = connect;
exports.connection = connection;
