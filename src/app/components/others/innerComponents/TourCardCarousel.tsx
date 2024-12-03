'use client';
import React, { useRef, useState, useEffect } from "react";
import "../../../css/TourCardCarousel.css";
import PackageCard from "../cards/PackageCard";

const tours = [
    { id: 1, image: "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/tour_box_4.jpg", title: "Langtang Valley Trekking", location: "Bhutan, India, Pokhara", price: "$600.00/Person", duration: "6 Days" },
    { id: 2, image: "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/tour_box_1.jpg", title: "Short Trek around Pokhara", location: "Bhutan, India, Tibet", price: "$250.00/Person", duration: "6 Days" },
    { id: 3, image: "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/tour_box_2.jpg", title: "Island Peak Climbing", location: "Nepal, Pokhara, Tibet", price: "$569.00/Person", duration: "3 Days" },
    { id: 4, image: "https://wordpress.themeholy.com/tourm/wp-content/uploads/2024/07/tour_box_3.jpg", title: "Ghorepani Poon Hill Trek", location: "Bhutan, Pokhara", price: "$569.00/Person", duration: "5 Days" },
];

export default function TourCardCarouselWithSnap() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Update active indicator on scroll
    const handleScroll = () => {
        if (!carouselRef.current) return;
        const cardWidth = carouselRef.current.children[0].clientWidth;
        const currentIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
        setActiveIndex(currentIndex);
    };

    // Scroll to a specific card
    const scrollToCard = (index: number) => {
        if (!carouselRef.current) return;
        const cardWidth = carouselRef.current.children[0].clientWidth;
        carouselRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
        setActiveIndex(index);
    };

    return (
        <div className="carousel-container">
            <div
                className="carousel"
                ref={carouselRef}
                onScroll={handleScroll}
            >
                {tours.map((tour) => (
                    <PackageCard data={tour} key={tour.id} />
                ))}
            </div>
            <div className="carousel-indicators">
                {tours.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === activeIndex ? "active" : ""}`}
                        onClick={() => scrollToCard(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
