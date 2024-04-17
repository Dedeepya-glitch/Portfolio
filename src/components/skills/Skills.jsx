import "./skills.scss"
import {motion} from "framer-motion"

const Skills = () => {

  const variants ={
        initial:{
            opacity: 0,
            scale:0.5,
        },
        animate:{
            opacity: 1,
            scale:1,
            transition:{
                duration: 0.8,
                delay:0.3,
                ease: [0, 0.71, 0.2, 1.01]
            }
        }
    }
  return (
    <motion.div className="skills" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <p>
                Everyday
                <br/> Learn someting new
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <h1><motion.b whileHover={{color:"rgb(255, 251, 0)"}}>Hands-on Experience Skills</motion.b></h1>
        </motion.div>

        <motion.div className="listContainer" variants={variants}>
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} className="ani" src="html.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="css.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="js.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="sass.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="boot.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="node.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="react.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="mongo.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="mongoose.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="express.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="adobe.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="python.png" alt="" />
                <motion.img whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 5 }} src="django.png" alt="" />
        </motion.div>
      
    </motion.div>
  )
}

export default Skills
