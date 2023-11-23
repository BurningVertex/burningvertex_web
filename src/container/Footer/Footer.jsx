import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import { FaWhatsapp } from 'react-icons/fa';




const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [danger, setDanger] = useState(false);

  const [emailError, setEmailError] = useState('');
	const { name, email, message } = formData;

  const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setDanger(false);
	};
      
  const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

  		const contact = {
			_type: 'contact',
			name: formData.name,
			email: formData.email,
			message: formData.message,
		};
    
    if (formData.name == '' || formData.message == '' || formData.email == '') {
			setLoading(false);
			setDanger(true);
			return;
		}

		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if (!formData.email.match(mailformat)) {
			setLoading(false);
			setEmailError('Email id is invalid');
			setDanger(true);
			return;
		}

		client
			.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch((err) => console.log(err));
	};

  return (
    <>
     <h2 className="head-text">Contact Us</h2>
     <h1 className="head-text">Let's grab a coffee</h1>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@burningvertex.com" className="p-text">hello@burningvertex.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <FaWhatsapp icon="fa-brands fa-whatsapp" />
          <a href="tel:+31616931592" className="p-text">     +31616931592</a>
        </div>
      </div>
      {!isFormSubmitted ? (
      <form className='app__footer-form app__flex'>
      <div className='app__flex'>
        <input
          className='p-text'
          name='name'
          type='text'
          placeholder='Your Name'
          value={name}
          onChange={handleChangeInput}
          required
        />
      </div>
      <div className='app__flex'>
        <input
          className={`${danger ? 'danger' : 'p-text'}`}
          name='email'
          type='email'
          placeholder='Your Email'
          value={email}
          onChange={handleChangeInput}
          required
        />
        {emailError && danger && (
          <div className='app__flex'>
            <p className='text-danger'>{emailError}</p>
          </div>
          )}
          </div>
          <div>
            <textarea
              name='message'
              value={message}
              onChange={handleChangeInput}
              placeholder='Your Message'
              className='p-text'
              required
            />
          </div>
      
          <button type='submit' className='p-text' onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </form>
      ) : (
        <h3 className='thankyou'>Sent! We Will Be In Touch</h3>
      )}
          </>
        );
      };

      export default AppWrap(
        MotionWrap(Footer, 'app__footer'),
        'contact',
        'app__whitebg',
      );