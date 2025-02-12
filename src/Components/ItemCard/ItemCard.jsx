import React, { useEffect, useState, useRef } from "react";
import "./ItemCard.css";

const ItemCard = ({ name, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      <img src={image} alt={name} className="item-image" />
      <div className="item-name">{name}</div>
    </div>
  );
};

export default ItemCard;
