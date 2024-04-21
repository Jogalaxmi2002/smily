import React from 'react';
import './Footer.css'; // Optional: for styling

const Footer = () => {
    return (
        <footer className="footer">
            {/* Include the SVG code */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#8697C4" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,133.3C384,149,480,139,576,112C672,85,768,43,864,37.3C960,32,1056,64,1152,74.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                 {/* Add text or links inside the SVG */}
                 <text x="50%" y="90%" dominantBaseline="middle" textAnchor="middle" fill="#fff">

                    © 2024 Your Company

                </text>
                <text x="90%" y="40%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontWeight="bold">
    Useful Links
</text>
<text x="90%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontWeight="bold">
    <tspan x="90%" dy="0">About Us</tspan>
    <tspan x="90%" dy="1.2em">Contact Us</tspan>
    <tspan x="90%" dy="1.2em">Careers</tspan>
    <tspan x="90%" dy="1.2em">Mobile Apps</tspan>
    <tspan x="90%" dy="1.2em">Terms of Use</tspan>
    <tspan x="90%" dy="1.2em">Privacy Policy</tspan>
    <tspan x="90%" dy="1.2em">Editorial Policy</tspan>
    <tspan x="90%" dy="1.2em">Press</tspan>
</text>






            </svg>


        </footer>
    );
};

export default Footer;
