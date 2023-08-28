import Header from "./Component/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
