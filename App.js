import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import Cardetails from "./components/cardetails";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Payment from './components/payment';
import Viewstatus from "./components/viewstatus";
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/cardetails" element={<Cardetails />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/viewhistory" element={<Viewstatus />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
