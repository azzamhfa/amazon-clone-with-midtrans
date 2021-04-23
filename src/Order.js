import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      {console.log(order)}
      <h2>Order</h2>
      <p>{moment(order.data.created).format('LLLL')}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order_total">Order Total : {value}</h3>
          </>
        )}
        value={order.data.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rp. "}
      />
    </div>
  );
}

export default Order;
