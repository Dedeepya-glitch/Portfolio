//For links inside the sidebar
import { motion } from "framer-motion";

//hamburger animation
const variants = {
  open: {
    transition:{
      staggerChildren: 0.2, //speed of dropdown of items
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, //reverse direction
    },
  },
};
//animation for items inside the sidebar
const itemVariants = {
  open:{
      y:0,
      opacity:1,
  },
  closed:{
      y:50,
      opacity:0,
  },
};

const Links = () => {

  const items=[   //square brackets for items
    "Homepage",
    "Skills",
    "Portfolio",
    "Contact",
    "About",
  ]

  return (
    //include motion. before a tag to give animation
    //variants are passed down here
    <motion.div className="links" variants={variants}>
      {items.map(item=>(
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links
