import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cpky2me', 'template_gmdfovb', form.current, {
        publicKey: 'Qvc9oRdabDV0Vo6Bo',
      })
      .then(
        () => {
          console.log('ENVIADO!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='field' id='email'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};