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
    <div className="max-w-7xl mx-auto p-6 bg-gray-100">
    {/* Header */}
    <header className="text-center mb-12">
      <h1 className="text-4xl font-bold text-teal-700 uppercase border-b-2 border-gray-300 inline-block pb-2 tracking-wider">
        Contact Us
      </h1>
    </header>

    {/* Contact Information Section */}
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <div className="info-item bg-white p-6 border border-gray-300 rounded-lg shadow-sm text-center hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
        <h2 className="text-xl font-semibold text-teal-700 uppercase mb-4">Our Location</h2>
        <p className="text-gray-600">123 Gourmet Street, Food City, FC 12345</p>
      </div>
      <div className="info-item bg-white p-6 border border-gray-300 rounded-lg shadow-sm text-center hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
        <h2 className="text-xl font-semibold text-teal-700 uppercase mb-4">Phone</h2>
        <p className="text-gray-600"><a href="tel:+1234567890" className="text-teal-700 font-bold">+1 (234) 567-890</a></p>
      </div>
      <div className="info-item bg-white p-6 border border-gray-300 rounded-lg shadow-sm text-center hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
        <h2 className="text-xl font-semibold text-teal-700 uppercase mb-4">Email</h2>
        <p className="text-gray-600"><a href="mailto:contact@restaurant.com" className="text-teal-700 font-bold">contact@restaurant.com</a></p>
      </div>
      <div className="info-item bg-white p-6 border border-gray-300 rounded-lg shadow-sm text-center hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
        <h2 className="text-xl font-semibold text-teal-700 uppercase mb-4">Opening Hours</h2>
        <p className="text-gray-600">Mon-Fri: 10am - 10pm</p>
        <p className="text-gray-600">Sat-Sun: 9am - 11pm</p>
      </div>
    </section>

    {/* Contact Form */}
    <section className="max-w-lg mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-teal-700 text-center uppercase mb-6">Get in Touch</h2>
      <form>
        <div className="form-group mb-6">
          <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-700" required />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-700" required />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">Message</label>
          <textarea id="message" name="message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-700" required></textarea>
        </div>
        <button type="submit" className="w-full p-3 bg-teal-700 text-white font-semibold rounded-lg uppercase hover:bg-teal-800 transition-colors duration-300">Send Message</button>
      </form>
    </section>

    {/* Footer */}
    <footer className="text-center mt-12 text-gray-500 text-sm">
      &copy; 2024 Restaurant Name. All rights reserved.
    </footer>
  </div>
);


}
 export default Contact;

