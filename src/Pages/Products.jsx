import React from 'react'
import { useEffect, useRef } from 'react'
import './Css/Products.css'
import ItemCard from '../Components/ItemCard/ItemCard'
import prod1 from '../assets/product 01.jpg'
import prod2 from '../assets/product 02.jpg'
import prod3 from '../assets/product 03.png'
import prod4 from '../assets/product 04.png'
import prod5 from '../assets/product 05.jpg'
import prod6 from '../assets/product 06.jpg'
function Products() {

    const products = [
        { id: 1, name: "Phantasm heads with body manikin", image: prod1 },
        { id: 2, name: "Typodonts and typodont teeth’s ", image: prod2 },
        { id: 3, name: "Nova bone products", image: prod3 },
        { id: 4, name: "All type lab wax’s", image: prod4 },
        { id: 5, name: "Compressors heads", image: prod5 },
        { id: 6, name: "Vacuum Pumps (diaform)", image: prod6 },
      ];

      const headingRef = useRef(null);
      const containerRef = useRef(null);
  
      useEffect(() => {
          const observer = new IntersectionObserver(
              (entries) => {
                  entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                          entry.target.classList.add('visible');
                          observer.unobserve(entry.target);
                      }
                  });
              },
              { threshold: 0.5 }
          );
          const sections = [headingRef, containerRef];
        sections.forEach((sectionRef) => {
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
        });
        return () => {
            sections.forEach((sectionRef) => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
            });
        };
    }, []);
  return (
    <div className="products">
        <div className="products-hero">
            <h1>PRODUCTS</h1>
        </div>

        <div className="products-heading">
            <h2>Choose from our wide range of Products</h2>
        </div>

        <div className="products-container" ref={containerRef}>
         <div className="row">
            <ItemCard {...products[0]} />
            <ItemCard {...products[1]} />
         </div>
        <div className="row">
            <ItemCard {...products[2]} />
            <ItemCard {...products[3]} />
        </div>
        <div className="row">
            <ItemCard {...products[4]} />
            <ItemCard {...products[5]} />
        </div>
    </div>
    </div>
  )
}

export default Products