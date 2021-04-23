import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
function Product({ id, title, image, price, rating }) {

  // State Redux for Basker --> Look reducer.js
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item.
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
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
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="" src={image}></img>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
