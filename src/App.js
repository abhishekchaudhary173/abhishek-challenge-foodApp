import "./App.css";
import Main from "./Components/Main";
import Products from "./Components/Products";
import Checkout from "./Components/Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
