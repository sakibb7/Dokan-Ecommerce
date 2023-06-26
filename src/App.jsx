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
import ScrollToTop from "./components/home/ScrollToTop";

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-products" element={<ProductCollections />} />
              <Route path="/:title" element={<ProductDetails />} />
              <Route path="/all-products/:title" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
