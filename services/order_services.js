const database = require("../config/database");

exports.saveOrder = (order, orderDetail, callbackQuery) => {
  const { id, date_payment, total_price, user_id } = order;
  const { product_id, order_id, quantity } = orderDetail;

  const sqlInsertOrder = `insert into product_order values ('${id}',${total_price},${date_payment},${user_id})`;

  database.connection.query(sqlInsertOrder, (error, result, fields) => {
    if (!error) {
      // callbackQuery(result);
    } else {
      console.log(error);
    }
  });

  let data = [];
  orderDetail.map(({ product_id, order_id, quantity }) => {
    data.push([product_id, `${order_id}`, quantity]);
  });

  const sqlInsertOrderDetail = `insert into order_detail(product_id,order_id,quantity) values ?`;
  database.connection.query(
    sqlInsertOrderDetail,
    [data],
    (error, result, fields) => {
      if (!error) {
        callbackQuery(result);
      } else {
        console.log(error);
      }
    }
  );
};
