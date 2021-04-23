import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
  //This is Redux for basket --> Looak reducer.js
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        ></img>
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((items) => {
            return (
              <CheckoutProduct
                id={items.id}
                title={items.title}
                image={items.image}
                price={items.price}
                rating={items.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout_right">
        <h2>Subtotal</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
