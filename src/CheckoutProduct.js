import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //Remove Item
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct_image" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <b>{value}</b>
              </>
            )}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp. "}
          />
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
