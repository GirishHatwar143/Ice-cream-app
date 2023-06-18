import React from "react";
import Logo from "./Images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"



const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="nav">
        <div className="main-div">
          <img src={Logo} alt="logo" height={"150px"} />
 <div className="name"><h2>Baskin Robbins</h2></div>
       
          <button className="nav-Button" onClick={() => navigate("/")}><h2>HOME</h2></button>
          
          <button className="nav-Button" onClick={() => navigate("/creammenu")}><h2>Favorite</h2></button>

          <button className="nav-Button" onClick={() => navigate("/checkout")}><h2>Cart</h2></button>
        </div>
      </nav>


    </>
  )
}
export default Navbar;