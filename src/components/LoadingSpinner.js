import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import './styles/LoadingSpinner.css'
import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";

function LoadingSpinner() {
 const [loading, setLoading] = useState(false)
 useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },5000)
 },[])
  return (
    <div className="spinner">
        {
            loading ?

           <div> <ScaleLoader></ScaleLoader>
           <p>Bienvenidos a Vivero San Vicente</p>
            </div>
            :
            <div>
                <Routes>
                    <Route path="/" element={<Hero></Hero>}></Route>
                </Routes> 
            </div>
        }

    </div>
  )
}

export default LoadingSpinner;