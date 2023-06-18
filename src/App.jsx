import React from "react";
import './App.css'
import Navbar from "./Navbar"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Home"
import Checkout from "./Checkout"
import Creammenu from "./Creammenu"



export default function App() {
  return (
   <>
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/creammenu" element={<Creammenu/>}/>
         <Route path="/checkout" element={<Checkout/>}/>
       
       </Routes>
     
     </BrowserRouter>
   
   </>
  )
}
