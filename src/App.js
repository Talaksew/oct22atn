import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
//import "./App.css"
// Import components
import ResetPassword from "././pages/ResetPassword";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddItem from "./pages/AddNewItem";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import ManageItems from "./pages/ManageItems";
import Officer from "./pages/Officers";
import Profile from "./pages/ManageProfile";
import Reserve from "./pages/Reserve";
import ViewDetails from "./pages/ViewDetail";
import EditItems from "./pages/EditItem";
import ReservedLists from "./pages/ReservedList";
import AddHotel from "./pages/AddHotels";
import ForgotPassword from "././pages/ForgotPassword";
import Home from "./pages/Home";
//import ResetPassword from "././pages/ResetPassword";
function App() {
  return (
   <Router>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/New" element={<AddItem />} />
      <Route path="/about" element={<About />} />   
      <Route path="/contactus" element={<Contact />} />
      <Route path="/itemsList" element={<ManageItems />} />
      <Route path="/officers" element={<Officer />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="//reserve/:item_id" element={<Reserve />} />
      <Route path="//detail/:item_id" element={<ViewDetails />} /> 
      <Route path="//edititem/:item_id" element={<EditItems />} />   
      <Route path="/reservedList" element={<ReservedLists />} />
      <Route path="/addhotel" element={<AddHotel />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
    </Routes>
  </Router> 
  );
}

export default App;
