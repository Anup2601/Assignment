import {Route, Routes,  } from "react-router-dom";
// import {Loader} from "lucide-react";
import {Toaster} from "react-hot-toast"
import { Home } from "./pages/Home";
import  CarProduct  from "./pages/product";

import BikeProduct from "./pages/BikeProduct";
import RecomProduct from "./pages/RecommProduct";

export const App: React.FC =() => {


  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="car/:id" element={<CarProduct/>} />
        <Route path="bikes/:id" element={<BikeProduct/>} />
        <Route path="recommendations/:id" element={<RecomProduct/>} />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
