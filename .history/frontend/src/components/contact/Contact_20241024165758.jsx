import "./contact.scss"
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
    
     <div className="contact">
        <div className="textContainer">
            <h1>Lets work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>ishikagulati16@gmail.com</span>
            </div>
            <div className="item">
                <h2>Address</h2>
                <span>134B,Vikrant Enclave</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>+91 9138638101</span>
            </div>

        </div>
        <div className="formContainer">
            <form ref={formRef} onSubmit={sendEmail}>
                <input type="text" required placeholder="Name" name="name"/>
                <input type="email" required placeholder="Email" name="email"/>
                <textarea rows={9} placeholder="Message" name="message"/>
                <button >Submit</button>
                {error && "Error"}
                {success && "Success"}
            </form>
        </div>
     
</div>


   )

}
 export default Contact;

