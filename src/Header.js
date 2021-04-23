import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, statusLogin, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      alert("You are Logged out!");
    }
  };

  const signIn = () => {
    dispatch({
      type: "SIGN_IN_PRESSED",
      status: true,
    });
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          // style={{ width: "350px" }}
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        {/* Homework. If we signIn */}
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header_option">
            <span className="header_optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionBasketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
