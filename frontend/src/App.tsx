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
      <Toaster
        position="top-right"
        toastOptions={{
          className:
            "bg-blue-600 text-white font-semibold rounded-xl px-4 py-3 shadow-lg",
          success: {
            className:
              "bg-green-600 text-white font-semibold rounded-xl px-4 py-3 shadow-lg",
          },
          error: {
            className:
              "bg-red-600 text-white font-semibold rounded-xl px-4 py-3 shadow-lg",
          },
        }}
      />
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="car/:id" element={<CarProduct/>} />
        <Route path="bikes/:id" element={<BikeProduct/>} />
        <Route path="recommendations/:id" element={<RecomProduct/>} />
      </Routes>
       
    </>
  )
}

export default App
