//import "./contact.scss"
 import emailjs from '@emailjs/browser';
 import { useRef, useState } from "react";
 const Contact = () => {
    const formRef=useRef();
    const[error,setError]=useState(false);
    const[success,setSuccess]=useState(false);
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_mrsr7gf', 'template_zl0ckh2', formRef.current, {
              publicKey: 'C7eUQGOquW0-dd0gE',
            })
            .then(
              (result) => {
                setSuccess(true);
              },
              (error) => {
                setError(true);
              },
            );
        };
   return (



}
 export default Contact;

