import React from 'react'
import Sections from './Sections'


const HireUsForm= () => {
  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
  };
    
  return (
    <>
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Join Our Team</h2>
        <span className='section__subtitle'>Contact Me</span>
        <div className='contact__container container grid'>
           
        <div className="contact__container">
            <div className="contact__image">
                <img
                    src="https://cdn.dribbble.com/users/2145302/screenshots/11320868/media/e84878486278ef9e8b47a23f039a82ce.png?resize=800x600&vertical=center"
                    alt="Contact Image"
                    className="contact__img"
                />
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Enter your details</h3>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="contact__form-input"
                            placeholder="Insert your name"
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Mail</label>
                        <input
                            type="email"
                            name="email"
                            className="contact__form-input"
                            placeholder="Insert your email"
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Total Experience</label>
                        <input
                            type="text"
                            name="text"
                            className="contact__form-input"
                            placeholder="Experience in years"
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Contact No</label>
                        <input
                            type="text"
                            name="text"
                            className="contact__form-input"
                            placeholder="Contact No"
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Address</label>
                        <input
                            type="text"
                            name="text"
                            className="contact__form-input"
                            placeholder="Enter your address"
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Choose a file</label>
                        <input
                            type="file"
                            name="file"
                            className="contact__form-input"
                            placeholder="No file chosen"
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Tell about you</label>
                        <textarea
                            name="project"
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Tell me about yourself"
                        ></textarea>
                    </div>
                    <button className="button button--flex" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
            </div>
    </section>
    <Sections/>
    </>
  )
}

export default HireUsForm;
