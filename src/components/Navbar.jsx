import React,{useEffect} from 'react'
import { Link } from "react-router-dom"



function Navbar() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    window.onscroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 100) {
        navbar.classList.add("Fixed")
      } else {
        navbar.classList.remove("Fixed")
      }
}
  }, [])
  
  return (
    <div className="py-8 shadow-[0_8px_6px_-6px_black] bg-white navbar">
      <div className="max-w-[1200px] m-auto flex justify-between px-[20px]">
      <div className="flex">
        <h1 className="tracking-wider text-2xl">
          <span className="text-orange-600 font-[800]">Eddy</span>LQ
        </h1>
      </div>
      <div className="flex">
        <Link to="/">
          <li className="ml-8 font-[500] text-xl cursor-pointer tracking-wider hover:text-orange-600">Home</li>
        </Link>
        <Link to="/about">
          <li className="ml-8 font-[500] text-xl cursor-pointer tracking-wider hover:text-orange-600">About</li>
        </Link>
      </div>
     </div>
    </div>
  )
}

export default Navbar