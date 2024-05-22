import React, { useRef } from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import './Contactform.css'
import emailjs from '@emailjs/browser';
import Sections from './Sections';

const Contactform = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_qajetwk', 'template_dl4557b', form.current, {
          publicKey: '6hZJOQgc0M09hC5px',
        })
        e.target.reset()
    };
  return (
    <>
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Get in touch</h2>
        <span className='section__subtitle'>Contact Me</span>
        <div className='contact__container container grid'>
            <div className="contact__content">
                <h3 className='contact__title'>Talk to me</h3>
                 <div className='contact__info'>
                   <div className='contact__card'>
                     <i className='bx bx-mail-send contact__card-icon'></i>
                     <h3 className='contact__card-title'>Email</h3>
                     <span className='contact__card-data'>user@gmail.com</span>
                     <a href='mailto:exampleemail@gmail.com.com' className='contact__button'>Write me{""} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div> 
                    <div className='contact__card'>
                     <i className='bx bxl-whatsapp contact__card-icon'></i>
                     <h3 className='contact__card-title'>Whatsapp</h3>
                     <span className='contact__card-data'>999-888-777</span>
                     <a href='https://api.whatsapp.com/send?phone=62214408789&text=hello, more information!' className='contact__button'>Write me{""} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div> 
                    <div className='contact__card'>
                     <i className='bx bxl-messenger contact__card-icon'></i>
                     <h3 className='contact__card-title'>Messenger</h3>
                     <span className='contact__card-data'>user.fb123</span>
                     <a href='https://m.me/crypticalcoder' className='contact__button'>Write me{""} <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div> 
                 </div>


            </div>
            <div className='contact__content'>
                <h3 className='contact__title'>Write me your project</h3>
                <form ref={form} onSubmit={sendEmail} className='contact__form'>
                  <div className='contact__form-div'>
                    <label className='contact__form-tag'>Name</label>
                    <input type='text' name='name'
                    className='contact__form-input  '
                    placeholder='Insert your name'
                    />
                     </div>
                    <div className='contact__form-div contact__form-area'>
                    <label className='contact__form-tag'>Mail</label>
                    <input type='email' name='email'
                    className='contact__form-input  '
                    placeholder='Insert your email'
                    />
                    </div>  
                    <div className='contact__form-div contact__form-area'>
                        <label className='contact__form-tag'>Project</label>
                    <textarea name='project' cols="30" rows="10" className='contact__form-input' placeholder='Write your project'>

                    </textarea>
                   
                    </div>
                    <button className='button button--flex'>
                        Send Message
                        <FaLocationArrow/> 
                    </button>
                    
                </form>

            </div>
            </div>
            
    </section>
    <Sections/>
    </>
  )
}

export default Contactform
