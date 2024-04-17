import {motion} from "framer-motion"
import { useState } from "react"

const Test = () => {

    const variants={
        visible:{opacity:1},
        hidden:{opacity:0}
    }
    
    const [show,setShow] = useState(false)
    
  return (
    <div className="course">
      <motion.div className="box" 
        variants={variants}
        animate={show? "visible": "hidden"}
         ></motion.div>

         <button onClick={()=>setShow(prev=>!prev)}>click</button>
    </div>
  )
}

export default Test
