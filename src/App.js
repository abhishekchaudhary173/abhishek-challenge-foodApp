import "./App.css";
import Main from "./Components/Main";
import Products from "./Components/Products";
import Checkout from "./Components/Checkout";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/main" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
