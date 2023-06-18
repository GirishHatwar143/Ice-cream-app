import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

const Checkout = () => {
  const cartitems = useSelector((state) => state.checkout.cartitems);

  const [warning, setWarning] = useState(false);
  const order = () => {
    alert("Your Order Placed !!!");
  };

  let totalBillAmount = cartitems.reduce((sum, item) => {
    return sum + item.quantity * item.unitPrice;
  }, 0);

  useEffect(() => {
    if (cartitems.length < 2) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [cartitems.length]);


  return (
    <div className="mainDiv">
      <div>
        {warning ? (
          <div>
            <h1>
              Dear Customer , <br />
              Please Select Minimum Two Items!
            </h1>
          </div>
        ) : (
          <div>
            <table className="tablebody">

              {/* <thead  > */}
                <tr className="heading">
                  <th>SR. NO</th>
                  <th>ITEM</th>
                  <th>ITEM - NAME</th>
                  <th>UNIT - PRICE</th>
                  <th>QUANTITY</th>
                  <th>PRICE</th>
                </tr>
              {/* </thead> */}
  
              <tbody>
                {cartitems.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={item.itemImage}
                          alt={item.itemName}
                          width="80px"
                          height="80px"
                        />
                      </td>
                      <td>{item.itemName}</td>
                      <td>{item.unitPrice}</td>
                      <td>{item.quantity}</td>
                      <td>{item.quantity * item.unitPrice}</td>
                    </tr>
                  );
                })}
              </tbody>
              
            </table>
           
                <div className="total" >
                  <div><h2>Total Bill Amount=  &#8377; {totalBillAmount}</h2> </div>
                 <div >
                 <button className="btn-order" onClick={order}>CONFIRM</button>
                 </div>
                  <p>Your Order Will Be Deliver In Half Hour</p>
           
                 </div>
                
              
             
                 
          </div>
        )}
      </div>
    </div>
  )
}
export default Checkout;