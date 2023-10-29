import React from "react";
import "./Cart.scss";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearItem, removeItem, deductItemPrice, sumItemPrice, increaseQuantity, decreaseQuantity } from "../../store/CartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
// import Card from "./Card";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Cart = () => {
  const CartItems = useSelector((store) => store.cart.items);
  const CartSum = useSelector((store) => store.cart.sum);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  const handleDltItem = (name, price) => {
    dispatch(removeItem(name));
    dispatch(deductItemPrice(price));
  };

  const increaseCount = (name, price) => {
    dispatch(increaseQuantity(name));
    dispatch(sumItemPrice(price));
  };

  const decreaseCount = (name, price) => {
    const item = CartItems.find((item) => item.name === name);

    if (item && item.quantity > 1) {
      dispatch(decreaseQuantity(name));
      dispatch(deductItemPrice(price));
    }
  };

  if (CartItems.length === 0) {
    return <>Empty Cart</>;
  }
  return (
    <div className="cart-items">
      {CartItems &&
        CartItems.map((item) => {
          const { name, imageId, defaultPrice, price, quantity } = item;
          return (
            <div className="cart-item" key={item.name}>
              <div className="cart-item-desc">
                <div className="cart-item-desc-img">
                  <img
                    src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + imageId}
                    alt="food"
                    className="rounded-lg w-[136px] object-cover h-[110px]"
                  />
                </div>
                <div className="cart-item-desc-desc">
                  <div className="cart-item-desc-desc-name">{name}</div>
                  <div className="cart-item-desc-desc-price">₹ {defaultPrice / 100 || price / 100}</div>
                  <div className="cart-item-desc-desc-btn">
                    <span
                      className="modify-same-item item-mod-btns"
                      onClick={() => {
                        decreaseCount(name, defaultPrice / 100 || price / 100);
                      }}>
                      <RemoveIcon />
                    </span>
                    <div className="item-mod-btns">{quantity}</div>
                    <span
                      className="modify-same-item item-mod-btns"
                      onClick={() => {
                        increaseCount(name, defaultPrice / 100 || price / 100);
                      }}>
                      <AddIcon />
                    </span>
                  </div>
                  <button
                    onClick={() => handleDltItem(item.name, (item.defaultPrice / 100) * quantity || (item.price / 100) * quantity)}
                    className="deleteBtn">
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
