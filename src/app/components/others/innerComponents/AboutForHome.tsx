import React from 'react';
import "./styles/AboutForHome.css";

export default function AboutForHome() {
    return (
        <div className='AboutForHome_main'>
            <h2>About Us</h2>
            <p>
                Welcome to our travel agency! We are dedicated to providing you with the best travel experiences around the world. 
                Our team of experts is here to help you plan your perfect vacation, whether it's a relaxing beach getaway, an adventurous 
                mountain trek, or a cultural city tour. Join us and explore the world with us!
            </p>
            <div className='AboutForHome_highlights'>
                <div className='highlight'>
                    <h3>Experienced Guides</h3>
                    <p>Our guides are knowledgeable and experienced, ensuring you have a memorable trip.</p>
                </div>
                <div className='highlight'>
                    <h3>Customizable Tours</h3>
                    <p>We offer customizable tours to fit your preferences and schedule.</p>
                </div>
                <div className='highlight'>
                    <h3>24/7 Support</h3>
                    <p>Our support team is available 24/7 to assist you with any inquiries or issues.</p>
                </div>
            </div>
        </div>
    );
}