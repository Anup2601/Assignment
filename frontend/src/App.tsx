import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {Heading3, Loader} from "lucide-react";
import {Toaster} from "react-hot-toast"
import { Home } from "./pages/Home";
import  Product  from "./pages/product";

export const App: React.FC =() => {


  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<Product/>} />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
