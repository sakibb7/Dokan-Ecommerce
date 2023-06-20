import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  ProductCollections,
  ProductDetails,
  Cart,
  Checkout,
} from "./pages";
import { ShopContextProvider } from "./context/ShopContext";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-products" element={<ProductCollections />} />
            <Route path="/:title" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
