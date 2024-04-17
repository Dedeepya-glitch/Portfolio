import "./sidebar.scss"
import ToggleButton from "./ToggleButton"
import Links from "../links/Links"
import { useState } from "react"
import { motion } from "framer-motion"

const Sidebar = () => {

    const[open,setOpen] = useState(false)

    //toggle hamburger button animation for filling
    const variants = {
        open:{
            clipPath:"circle(1200px at 50px 50px",
            transition:{
                type:"spring",
                stiffness:20,
            },
        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:200,  //speed
                damping:40,
            }
        }
    }

  return (
    <motion.div className="sidebar" animate={open ? "open":"closed"}>
      <motion.div className="bg" variants={variants}>  {/** checks whether the variants are closed or open and functions accordingly */}
        <Links/>
      </motion.div>
     <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
