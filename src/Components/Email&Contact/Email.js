import React, { useRef, useState } from 'react';
import './Email.css';
import emailjs from 'emailjs-com';

const Email = () => {
  const form = useRef();
  const [name, setName] = useState(false);
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_mki4n2w', // Replace with your EmailJS service ID
      'template_g7h6gsg', // Replace with your EmailJS template ID
      form.current,
      'z2GTEjb25sEfQikFa' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
        setName(true);
    
})
    .catch((err) => {
      console.log('FAILED...', err);
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className='contact-form'>
      <div className='w-left'>
        <div className='awesome'>
          <span>Get in touch </span>
          <span>Contact me</span>
          <div className='blur c-blur2' style={{ background: "skyblue" }}></div>
        </div>
      </div>

      <div className='c-right'>
        <form ref={form} onSubmit={onSubmit}>
          <input
            type="text"
            name="from_name"
            className="user"
            placeholder="Name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="reply_to"
            className="user"
            placeholder="Email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <textarea
            name="message"
            className='user'
            placeholder="Message"
            value={toSend.message}
            onChange={handleChange}
          ></textarea>
          <span>{name&&"Thanks for contact me"}</span>
          <input type="submit" value="Send" className='button s-button' />
          
          <div className='blur c-blur1' style={{ background: 'var(--purple)' }}></div>
         
        </form>
      </div>
    </div>
  );
}

export default Email;
