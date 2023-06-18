import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Creammenu.css";
import { removeToFavorite } from "./Store/ckeckoutSlice";

const Creammenu = () => {
  const Dispatch = useDispatch();
  const favoriteItem = useSelector((state) => state.checkout.favorite);
  const removeFavorite = (item) => {
    Dispatch(removeToFavorite(item))

  };

  return (
    <div className="body">
      <h2>Add Favorite Ice-Cream</h2>
      <div className="favmainContainer">
        {favoriteItem.map((item, index) => {
          return <>
            <div className="favMain">
              <div className="favcontainer">
                <img src={item.itemImage} alt="Image" className="Image" />
                <h2>{item.itemName}</h2>
                <h2>Rs={item.unitPrice}</h2>
                <button className="btn" onClick={() => removeFavorite(item)}>Remove</button>
              </div>
            </div>
          </>

        }
        )}
      </div>
    </div>
  )
}
export default Creammenu;