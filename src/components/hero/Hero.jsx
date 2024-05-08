//After creating the components include it in the app.jsx

import "./hero.scss"
import {motion} from "framer-motion"

//text and button animation
const textVariants={
  initial:{
    x: -500,
    opacity: 0,
  },
  animate:{
    x: 0,
    opacity: 1,
    transition:{
      duration:1,
      staggerChildern:0.1
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}

//sliding text animation
const sliderVariants={
  initial:{
    x:0,
  },
  animate:{
    x: "-220%",
    transition:{
      repeat:Infinity,
      duration: 20,
      repeatType:"mirror"
    }

  }
}

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
         <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>DEDEEPYA POOVAIAH</motion.h2>
            <motion.h1 variants={textVariants}>MERN Stack Developer</motion.h1>
            <motion.div variants={textVariants} className="buttons">

              {/*Linking the buttons to the sections  */}
              <a href="#Portfolio">
                <motion.button whileHover={{backgroundColor:"yellow", color:"black"}} variants={textVariants}>See the latest works</motion.button>
             </a>
             <a href="#Contact">
                <motion.button whileHover={{backgroundColor:"yellow", color:"black"}} variants={textVariants}>Contact me</motion.button>
              </a>
            </motion.div>
            {/* include the button animation in tne tag */}
            <motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="" />
         </motion.div>
        </div>

        {/* slider variant is added in the tag.....including initial and animate is a must*/}
        <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
          Design.Build.Deploy
        </motion.div>
        {/* includes the profile pic */}
        <div className="imageContainer">
          {/* select an image later */}
        <img src="prof.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero
