'use client';
import React from 'react'
import "./styles/TourCardCarousel.css";
export default function PackageCard(props: { data: { id: number | string; image: string; title: string; location: string; price: string; duration: string; }; }) {
    // write all the key where
    const { id, image, title, location, price, duration } = props.data;

    return (
        <div className="tour-card" key={id}>
            <img src={image} alt={title} className="tour-image" />
            <div className="tour-info">
                <h3 className="tour-title">{title}</h3>
                <p className="tour-location">{location}</p>
                <p className="tour-price">{price}</p>
                <div className="tour-footer">
                    <span className="tour-duration">{duration}</span>
                    <button className="book-now">Book Now →</button>
                </div>
            </div>
        </div>
    )
}
