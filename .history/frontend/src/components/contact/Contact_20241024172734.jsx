import "./contact.css"
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


 <div className="contact-page">
 <header>
     <h1>Contact Us</h1>
 </header>

 <section className="contact-info">
     <div className="info-item">
         <h2>Our Location</h2>
         <p>123 Gourmet Street, Food City, FC 12345</p>
     </div>
     <div className="info-item">
         <h2>Phone</h2>
         <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
     </div>
     <div className="info-item">
         <h2>Email</h2>
         <p><a href="mailto:contact@restaurant.com">contact@restaurant.com</a></p>
     </div>
     <div className="info-item">
         <h2>Opening Hours</h2>
         <p>Mon-Fri: 10am - 10pm</p>
         <p>Sat-Sun: 9am - 11pm</p>
     </div>
 </section>

 <section className="contact-form">
     <h2>Get in Touch</h2>
     <form ref={formRef} onSubmit={sendEmail}>
         <div className="form-group">
             <label htmlFor="name">Name</label>
             <input type="text" id="name" name="name" required />
         </div>
         <div className="form-group">
             <label htmlFor="email">Email</label>
             <input type="email" id="email" name="email" required />
         </div>
         <div className="form-group">
             <label htmlFor="message">Message</label>
             <textarea id="message" name="message" rows="5" required></textarea>
         </div>
         <button type="submit">Send Message</button>
         {error && "Error"}
         {success && "Success"}
     </form>
 </section>

 <footer>
     <p>&copy; 2024 KC Restaurant . All rights reserved.</p>
 </footer>
</div>

   )

}
 export default Contact;

