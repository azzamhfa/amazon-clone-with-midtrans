import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const [token, setToken] = useState();

  useEffect(() => {
    const getToken = async () => {
      const response = await axios({
        method: "post",
        url: `/checkout`,
        data: {
          nama: "Nama" + Math.floor(Math.random() * 100000),
          email: user.email,
          harga: getBasketTotal(basket),
          orderID: "ORDER-ID-" + Math.floor(Math.random() * 100000),
        },
      });
      setToken(response.data.token);
    };
    getToken();
  }, [basket]);

  const midTransSubmit = () => {
    window.snap.pay(token, {
      onSuccess: function (result) {
        console.log(result);
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(result.order_id)
          .set({
            basket: basket,
            amount: result.gross_amount,
            created: result.transaction_time,
          });
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      },
    });
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>User Email : {user?.email} </p>
            <p>123 ABC</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((items) => (
              <CheckoutProduct
                id={items.id}
                title={items.title}
                image={items.image}
                price={items.price}
                rating={items.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <h3>Order Total : {value}</h3>
                </>
              )}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rp."}
            />
            <button onClick={midTransSubmit}>
              PAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
