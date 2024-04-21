import React from 'react';
import './Home.css'; // Import the corresponding CSS file for styling

function Home() {
    return (

            <div className="Home">
            <header className="header">
                <h1>Welcome to Our Dental Clinic</h1>
                <p>Your smile is our priority!</p>
            </header>
            <section className="boxes-section">
                <div className="box">
                    <h2>About Us</h2>
                    <p>We are a team of experienced dentists dedicated to providing high-quality dental care to our patients. Our clinic offers a welcoming and comfortable environment for patients of all ages.</p>
                </div>
                <div className="box">
                    <h2>Our Services</h2>
                    <ul>
                        <li>Teeth Cleaning</li>
                        <li>Fillings and Restorations</li>
                        <li>Tooth Extractions</li>
                        <li>Root Canal Therapy</li>
                        <li>Dental Implants</li>
                        <li>Orthodontic Treatment</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Meet Our Dentists</h2>
                    <ul>
                        <li>Dr. Emily Johnson</li>
                        <li>Dr. Michael Smith</li>
                        <li>Dr. Sarah Williams</li>
                        <li>Dr. David Lee</li>
                    </ul>
                </div>
                <div className="flex-container">
            <div className="flex-item">

                <p>Dr. Emily Johnson.</p>

            </div>


            <div className="flex-item-2">

          <p>Dr. Michael Smith.</p>

           </div>

           <div className="flex-item-2">

          <p>Dr. David Lee</p>

           </div>
           </div>
            </section>
            <section className="appointment-section">
                <h2>Book an Appointment</h2>
                <a href="/appointment-form" className="book-appointment-btn">Book Now</a>
            </section>
            <section className="testimonials-section">
                <h2>What Our Patients Say</h2>
                <div className="testimonial">
                    <p>"The staff here is amazing! They made me feel comfortable and relaxed during my dental procedure."</p>
                    <p className="testimonial-author">- John Doe</p>
                </div>
                <div className="testimonial">
                    <p>"I'm so happy with the results of my teeth whitening treatment. Thank you!"</p>
                    <p className="testimonial-author">- Jane Smith</p>
                </div>
            </section>
            </div>
    );
}

export default Home;
