import { useRef } from "react"
import "./mountparallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"

//taking type as a prom from services section in app.jsx
const Parallax = ({ type }) => {

    const ref = useRef()

    const{scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    // in the page at value 0 it'll be 0% and at 1 it'll be 100%
    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]) 

  return (
    <div className="parallax" ref={ref}>
        <motion.h1 style={{y: yBg}}>Projects</motion.h1>
      <motion.div className="background"></motion.div>
      <motion.div className="jungle1"></motion.div>
      <motion.div className="jungle2"></motion.div>
      <motion.div className="jungle3"></motion.div>
      <motion.div className="jungle4"></motion.div>
      <motion.div className="jungle5"></motion.div>
      <motion.div className="man_on_mountain"></motion.div>
    </div>
  )
}

export default Parallax
