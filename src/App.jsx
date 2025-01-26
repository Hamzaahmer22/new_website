import { useState } from 'react'
import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Calculator from "./Components/Calculator";
import LoanRequestForm from "./Components/LoanRequestForm";
import Navbar from "./Components/Navbar";
import AdminDashboard from "./Components/AdminDashboard";
import Card from './Components/Ui/Card';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Card />
<Routes>
  <Route path="/" element={<LandingPage />}  />
  <Route path="/calculator" element={<Calculator />}  />
  <Route path="/loan-request" element={<LoanRequestForm />}  />
  <Route path="/admin" element={<AdminDashboard />}  />
  
</Routes>

    </BrowserRouter>
    
  )
}

export default App;
