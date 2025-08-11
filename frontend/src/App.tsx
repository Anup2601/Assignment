import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {Heading3, Loader} from "lucide-react";
import {Toaster} from "react-hot-toast"
import { Home } from "./pages/Home";

export const App: React.FC =() => {


  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>

      <Toaster/>
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin "/>
      </div>
    </>
  )
}

export default App
