import "./navbar.scss"
import {motion} from "framer-motion"

import React from 'react'
import Sidebar from "../../sidebar/toggleButton/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar/>
      <div className="wrapper">
        {/* span tag animation */}
            <motion.span initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}>Portfolio</motion.span>
            <div className="social">
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/dedeepya88?igsh=MTI0Y28xM2Q2cngxbg=="><img src="/instagram.png" alt="" /></a>
                <a href="https://www.youtube.com/channel/UCZBLb1RKskJdjQ0a1K6zcXA"><img src="/youtube.png" alt="" /></a>
                <a href="https://github.com/Dedeepya-glitch?tab=projects"><img src="/github.png" alt="" /></a>
            </div>
        </div>
      
    </div>
  )
}   

export default Navbar
