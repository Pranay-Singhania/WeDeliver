import React, { useState } from "react";
import "./ItemCard.scss";
// import defaultImg from "../assets/default.png";
import { addItem, sumItemPrice } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image_not_available from "../../assets/images/Image_not_available.png";

const ItemCard = ({ name, description, defaultPrice, price, imageId }) => {
  const [qty, setQty] = useState(1);
  const [showAddItem, setShowAddItem] = useState(1);

  const item = { name, description, defaultPrice, price, imageId };
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    dispatch(sumItemPrice(item.defaultPrice / 100 || item.price / 100));
    // const cartItem = CartItems.find((item) => item.name === name);
    // console.log("item quantity", cartItem.showAddItem);
  };
  const increment = () => {
    setQty((prev) => prev + 1);
  };
  const decrement = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <div className="itemCard-container">
      <div className="itemCard-desc">
        <div>
          <div className="itemCard-desc-name">{name?.length > 32 ? name?.slice(0, 32) + "..." : name}</div>
          <div className="itemCard-desc-desc">{description?.length > 75 ? description?.slice(0, 75) + "..." : description}</div>
        </div>
        <div className="itemCard-desc-price">₹ {defaultPrice / 100 || price / 100}</div>
      </div>
      <div className="itemCard-desc-img">
        <img
          src={imageId ? "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + imageId : Image_not_available}
          alt="no image"
        />
        <div className="itemCard-btn">
          {showAddItem ? (
            <button className="itemCard-btn-sub" onClick={() => handleAddItem(item)}>
              <span>
                <AddIcon />
              </span>
            </button>
          ) : (
            <>
              <button className="itemCard-btn-add" onClick={() => decrement()}>
                <span>
                  <RemoveIcon />
                </span>
              </button>
              <span className="items">{qty}</span>
              <button className="itemCard-btn-sub" onClick={() => increment()}>
                <span>
                  <AddIcon />
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
