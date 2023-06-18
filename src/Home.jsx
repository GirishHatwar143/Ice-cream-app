import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { VscStarEmpty, VscStarFull } from "react-icons/vsc";
import { addToCart,changeColor,addToFavorite } from "./Store/ckeckoutSlice"



const Home = () => {
  const [favorite, setFavorite] = useState(false);

  const navigate = useNavigate();
  const Selector = useSelector((state) => state.checkout);
  const { Data, cartitems } = Selector
  const Dispatch = useDispatch()

  const handleAddItem = (items) => {
    Dispatch(addToCart(items))
  };
  const handleClick = (ele) => {
  
   Dispatch(changeColor(ele))
   Dispatch(addToFavorite(ele))
    
  }


  return (
  <div className="main" >
      {console.log(cartitems)}
      <h2 className="Heading"> Welcome To Baskin Robbins !!!</h2>
      <div className="mainContainer">
        {Data.map((item, index) =>
          <div className="container">
            <div >
              <div className="icon">
                <i onClick={() => handleClick(item)}>{item.favorite ? <VscStarFull /> : <VscStarEmpty />}</i>

              </div>
              <img src={item.itemImage} alt="Image" className="Image" />
            </div>

            <h2>{item.itemName}</h2>
            <h2>Rs={item.unitPrice}</h2>
            <button className="btn" onClick={() => handleAddItem(item)}>
              Add
            </button>


          </div>)}

      </div>
    </div>

  )
}
export default Home;