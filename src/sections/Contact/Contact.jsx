
import styles from "./ContactStyles.module.css";
import React, { useState } from 'react';


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e7601251-b181-439e-94bf-300bbf64fafb',
          ...formData
        })
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        // 清空表单数据
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="srctionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <input className = "hover" type = "submit" value = "Submit"/> 
 

      </form>
    </section>
  );
}

export default Contact;
