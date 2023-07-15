// import React from 'react'

// const Contact = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Contact
import { FormEvent } from 'react';
// import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // emailjs.sendForm('service_v52e6ir', 'template_6ed65ge', form.current, 'vqU9qte9ezY0Q2dj5')
    //   .then((result) => {
    //       console.log(result.success);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

  return (
    <div className='form-box'>
      <div>
        <form onSubmit={sendEmail}>
          <label id='name'>Name</label>
          <input placeholder='Name Please' className='userName' type="text" name="user_name" required />
          <label>Email</label>
          <input placeholder='Your Email' type="email" name="user_email" required />
          <label>Message</label>
          <textarea placeholder='Leave a message' name="message" rows={3} required />
          <input className='send-button' type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
export default Contact;

