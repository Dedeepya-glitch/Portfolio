//Its important to note the React hooks and Framer-motion hooks

import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import { useRef } from "react";

//creating the array items 
const items = [
{
    id:1,
    title:"Anime streaming website",
    img:"anime.png",
    desc:"A static website built using HTML and CSS for frontend with links added to each card redirecting to different website to watch the particular Anime."
},
{
    id:2,
    title:"VR product landing page",
    img:"vr.png",
    desc:"A static product landing website to purchase VR products built using HTML and CSS ."
},
{
    id:3,
    title:"Music player",
    img:"music.png",
    desc:"A mobile responsive website built using HTML, CSS and Javascript used to play Music with play/pause functionality and volume increase/decrease."
},
{
    id:4,
    title:"ToDo App",
    img:"todo.png",
    desc:"A React ToDo application with functions like Creating, Updating and Deleting a task. Tools used are HTML, CSS, JS and React for Frontend, Express JS for Backend and MongoDb for Database."
},
{
    id:5,
    title:"Hospital Management System",
    img:"hospital.png",
    desc:"A Python project for hospital management system with functions like login for admin, doctors and patients. Booking an appointment with specific doctor and downloading the billing invoice for patients. Tools used are Python, Flask, MySQL"
},
];

//creating different section using the array from above
const Single = ({item}) => {
    //for items inside the Projects
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    }) 

    const y = useTransform(scrollYProgress, [0,1], [-300, 300])

    return <section>
        <div className="container">
            <div className="wrapper">
                {/* referencepoint is on the image [0,1] */}
                <div className="imageContainer"  ref={ref}>
                    {/* passing use transform constraint */}
                    <img src={item.img} alt="" />
                </div>
                
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
    </section>
}

const Portfolio = () => {

    //using useRef hook for progressbar animation
    const ref = useRef()
    // passing the target into the scroll hook
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    }) 

    //using useSpring hook
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

  return (

    // passing the ref
    <div className="portfolio" ref={ref}>
        {/* (2) Progress section */}
        <div className="progress">
            <h1>Featured Works</h1>
            {/* using motion tag and passing the scaleX value of useSpring hook */}
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
        {/* (1st) After using map function include key value */}
      {items.map((item) => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
