import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUsers from "./components/AddUsers";
import EditUsers from "./components/EditUsers";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div style={{ margin: "auto", width: "100%", padding: "3px 55px" }}>
    <NavBar/>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddUsers/>}/>
        <Route path="/edit/:id" element={<EditUsers/>}/>
        
      </Routes>
    </Router>
    </div>
  
  );
}

export default App;
