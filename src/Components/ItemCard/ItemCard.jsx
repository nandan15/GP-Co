import React, { useEffect, useState, useRef } from "react";
import "./ItemCard.css";
import { Link } from 'react-router-dom';

const ItemCard = ({ name, image }) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(itemRef.current);
                }
            },
            { threshold: 0.3 }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
            if (itemRef.current) {
                observer.unobserve(itemRef.current);
            }
        };
    }, []);

    return (
        <div ref={itemRef} className={`item-card ${isVisible ? "visible" : ""}`}>
            <div className="item-image-container">
                <img src={image} alt={name} className="item-image" />
            </div>
            <div className="item-info">
                <h3 className="item-name">{name}</h3>
                <Link to="/contact">
                    <button className="item-button">Contact us</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemCard;
