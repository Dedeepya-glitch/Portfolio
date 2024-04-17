import"./contact.scss"
import {animate, motion} from "framer-motion"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const variants = {
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        }
    }
}

const Contact = () => {
    //for emailjs  form functionality
    const formRef = useRef();
    //To check any errors
    const[error, setError] = useState(false)
    const[success, setSuccess] = useState(false)
   
    //From documentation of Emailjs
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            //replace the template, service and public key ID
          .sendForm('service_gi28c2w', 'template_sl23f0f', formRef.current, 'pk6CnFIfS7eTwCFI-')
          .then(
            (success) => {
              setSuccess(true)
            },
            (error) => {
              setError(true)
            },
          );
        }
    //    
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Connect</motion.h1>
        <motion.div variants={variants} className="item">
            <h2>Mail</h2>
            <span>dedeepyapoovaiah@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
            <h2>Phone</h2>
            <span>+91 7676020431</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
         {/* Passing the Ref and Submit functionality of form */}
        <motion.form  ref={formRef} onSubmit={sendEmail}> 
            <input type="text" required placeholder="Name" name="name"/>
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {/* error check upon submit */}
            {error && "error"}
            {success && "success"}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
